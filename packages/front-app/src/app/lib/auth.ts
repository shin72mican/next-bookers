import NextAuth, { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUser } from "@/services/auth/user";

// function isUser(arg: any): arg is User {
//   return arg.User !== undefined;
// }

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials):Promise<User|null> {
        const email:string = credentials?.email ?? "";
        const password:string = credentials?.password ?? "";
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
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user?.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
    // async signIn() {
    //   // if (isUser(user)) {
    //   //   if(user.error) {
          
    //   //   }
    //   //   // エラーメッセージをクエリパラメーターとしてサインインページにリダイレクト
    //   //   return `/auth/user/signin?error=Invalid%20credentials`;

    //   // }
    //   return true;
    // }
  },
   secret:process.env.NEXTAUTH_SECRET,
  // secret:process.env.SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }