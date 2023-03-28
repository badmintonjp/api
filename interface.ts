import { ObjectId } from "mongodb";
import type {
  AdapterAccount,
  AdapterUser,
  AdapterSession,
  VerificationToken as AVerificationToken,
} from "next-auth/adapters";
export interface User extends AdapterUser {}
export interface Account extends Omit<AdapterAccount, "userId"> {
  userId: ObjectId;
}
export interface Session extends AdapterSession {}
export interface VerificationToken extends AVerificationToken {}
