import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUser } from "@/services/auth/user";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email:string = credentials?.email ?? "";
        const password:string = credentials?.password ?? "";

        // 不正入力の場合null返す
        if (!email && !password) {
          return null;
        }

        const user = getUser(email, password);
  
        return user ?? null;
      }
    })
  ],
  pages: {
    signIn: '/auth/user/signin',
  },
  secret:process.env.NEXTAAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }