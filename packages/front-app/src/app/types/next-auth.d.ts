import { DefaultSession, DefaultUser } from "next-auth";

// interface CustomeUser extends DefaultUser {
//   id: 
// }

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    error?: string|null;
    // role?: string;
  }
  
  interface Session extends DefaultSession {
    // user: {
    //   id: string;
    //   error: string;
    // } & DefaultSession["user"];

    // user: User & DefaultSession["user"];
    user: User;
  }
}