import User from "@/models/users";
import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await (await User()).find().toArray();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(Number(error) || 500).end();
  }
}
