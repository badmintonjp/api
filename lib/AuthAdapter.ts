import { ObjectId, WithId, OptionalId } from "mongodb";
import { Adapter } from "next-auth/adapters";
import { accountDB, sessionDB, usersDB, verificationTokenDB } from "./mongoDB";

export function _id(hex: any) {
  if ((hex === null || hex === void 0 ? void 0 : hex.length) !== 24)
    return new ObjectId();
  return new ObjectId(hex);
}
export function from(object: WithId<any>) {
  const newObject: any = {};
  for (const key in object) {
    const value = object[key];
    if (key === "_id") {
      newObject.id = value.toHexString();
    } else if (key === "userId") {
      newObject[key] = value.toHexString();
    } else {
      newObject[key] = value;
    }
  }
  return newObject;
}
export function to(object: OptionalId<any>) {
  const newObject: any = {
    _id: _id(object.id),
  };
  for (const key in object) {
    const value = object[key];
    if (key === "userId") newObject[key] = _id(value);
    else if (key === "id") continue;
    else newObject[key] = value;
  }
  return newObject;
}

export default function MongoDBAdapter(): Adapter {
  return {
    async createUser(data) {
      const user = await usersDB.findOne({ email: data.email });
      if (!user) {
        const newUser = to(data);
        await usersDB.insertOne(newUser);
        return from(newUser);
      } else return from(user);
    },
    async getUser(id) {
      const user = await usersDB.findOne({ _id: _id(id) });
      if (!user) return null;
      return from(user);
    },
    async getUserByEmail(email) {
      // const user = await usersDB.findOne({ email });
      // if (!user) return null;
      // return from(user);
      return null;
    },
    async getUserByAccount(provider_providerAccountId) {
      const account = await accountDB.findOne(provider_providerAccountId);
      if (!account) return null;
      const user = await usersDB.findOne({ _id: new ObjectId(account.userId) });
      if (!user) return null;
      return from(user);
    },
    async updateUser(data) {
      console.log("updateUser>>>", data);
      const { _id, ...user } = to(data);
      const result = await usersDB.findOneAndUpdate(
        { _id },
        { $set: user },
        { returnDocument: "after" }
      );
      return from(result.value);
    },
    async deleteUser(id) {
      const userId = _id(id);
      await Promise.all([
        accountDB.deleteMany({ userId }),
        usersDB.deleteOne({ _id: userId }),
      ]);
    },
    async linkAccount(data) {
      const account = to(data);
      await accountDB.insertOne(account);
      return account;
    },
    async unlinkAccount(provider_providerAccountId) {
      const { value: account } = await accountDB.findOneAndDelete(
        provider_providerAccountId
      );
      return from(account);
    },
    async createSession(data) {
      const session = to(data);
      await sessionDB.insertOne(session);
      return from(session);
    },
    async getSessionAndUser(sessionToken) {
      const session = await sessionDB.findOne({ sessionToken });
      if (!session) return null;
      const user = await usersDB.findOne({ _id: new ObjectId(session.userId) });
      if (!user) return null;
      return {
        user: from(user),
        session: from(session),
      };
    },
    async updateSession(data) {
      const { _id, ...session } = to(data);
      const result = await sessionDB.findOneAndUpdate(
        { sessionToken: session.sessionToken },
        { $set: session },
        { returnDocument: "after" }
      );
      return from(result.value);
    },
    async deleteSession(sessionToken) {
      const { value: session } = await sessionDB.findOneAndDelete({
        sessionToken,
      });
      return from(session);
    },
    async createVerificationToken(data) {
      await verificationTokenDB.insertOne(to(data));
      return data;
    },
    async useVerificationToken(identifier_token) {
      const { value: verificationToken } =
        await verificationTokenDB.findOneAndDelete(identifier_token);
      if (!verificationToken) return null;
      // @ts-expect-error
      delete verificationToken._id;
      return verificationToken;
    },
  };
}
