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
        const user = await getUser(email, password);
  
        return user ?? null;
      }
    })
  ],
  pages: {
    signIn: '/auth/user/signin',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      } 
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) {
        return url
      } 
      return baseUrl
    }
  },
  secret:process.env.NEXTAAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }