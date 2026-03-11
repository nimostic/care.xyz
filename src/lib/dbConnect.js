const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;
export const collections = {
  SERVICES: "services",
  USERS:"users",
};
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbconnect = (cname)=>{
    return client.db(dbname).collection(cname)
}