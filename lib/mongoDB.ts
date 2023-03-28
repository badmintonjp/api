import { Account, Session, User, VerificationToken } from "@/interface";
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

declare global {
  var _mongoClientPromise: Promise<any>;
}
let clientPromise: Promise<MongoClient>;
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}
export default clientPromise;

export const usersDB = database.collection<User>("users");
export const accountDB = database.collection<Account>("accounts");
export const sessionDB = database.collection<Session>("sessions");
export const verificationTokenDB =
  database.collection<VerificationToken>("verificationTokens");
