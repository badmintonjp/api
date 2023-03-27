import clientPromise from "@/lib/mongoDB";

export default async function User() {
  const client = await clientPromise;
  const collection = client.db("main").collection<{
    name: string;
  }>("users");
  return collection;
}
