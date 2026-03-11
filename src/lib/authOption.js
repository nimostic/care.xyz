import { logInUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbconnect } from "./dbConnect";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Return null if user data could not be retrieved
        // console.log(credentials);
        // password, nid, contact কখনো session এ রাখবনা।
        const user = await logInUser(credentials);
        if (!user || user.success === false) return null;
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image || null,
          role: user.role,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account, profile, email, credentials);
      // create user to db from google
      if (account?.provider === "credentials") return true;
      const isExist = await dbconnect(collections.USERS).findOne({
        email: user.email,
      });
      if (isExist) {
        return true;
      }
      //create user
      const newUser = {
        provider: account?.provider,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "user",
        //don't have it in google
        contact: null,
        nid: null,
      };
      const result = await dbconnect(collections.USERS).insertOne(newUser);
      console.log(result);
      return result.acknowledged;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },

    async jwt({ token, user, account }) {
      if (user) {
        if (account?.provider === "google") {
          const dbUser = await dbconnect(collections.USERS).findOne({
            email: user.email,
          });
          token.role = dbUser?.role;
        } else {
          token.role = user?.role;
        }
        token.email = user?.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.role = token?.role;
        session.user.email = token?.email;
      }
      return session;
    },
  },
};

//  DB → token → session এই pipeline টা jwt callback ছাড়া complete হয় না। DB তে role থাকলেই session এ আসে না, jwt দিয়ে bridge করতে হয়।
