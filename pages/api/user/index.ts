import { usersDB } from "@/lib/mongoDB";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await usersDB.find().toArray();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(Number(error) || 500).end();
  }
}
