import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.MONGODB_USER || !process.env.MONGODB_PASS) {
  throw new Error("Please add your Mongo URI to .env.local");
}
const options: MongoClientOptions = {};
const username = encodeURIComponent(process.env.MONGODB_USER);
const password = encodeURIComponent(process.env.MONGODB_PASS);
const uri = `mongodb+srv://${username}:${password}@main.g1zf50u.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, options);
const database = client.db("main");

export const usersDB = database.collection<{
  name: string;
}>("users");

// let client;
// let clientPromise: Promise<MongoClient>;

// declare global {
//   var _mongoClientPromise: Promise<MongoClient>;
// }

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;
