import { User } from "@/interface";
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

export const usersDB = database.collection<User>("users");
