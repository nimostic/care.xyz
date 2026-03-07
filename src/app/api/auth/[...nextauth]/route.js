import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    // ১. গুগল লগইন সেটআপ
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ২. ইমেইল/পাসওয়ার্ড লগইন সেটআপ
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // এখানে আপনার ডাটাবেস থেকে ইউজার চেক করতে হবে
        // উদাহরণ হিসেবে একটি মক ইউজার দিচ্ছি:
        const user = { id: "1", name: "User", email: "test@example.com", password: "hashed_password" };

        if (!credentials?.email || !credentials?.password) return null;

        // পাসওয়ার্ড ভ্যালিডেশন (bcrypt দিয়ে)
        // const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        
        // যদি পাসওয়ার্ড মিলে যায় তবে ইউজার রিটার্ন করুন
        if (credentials.email === user.email) {
            return user;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };