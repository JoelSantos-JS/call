import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions : NextAuthOptions  = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar'
        }
      }
   
    }),
    
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({account}) {

      if(!account?.scope?.includes('https://www.googleapis.com/auth/calendar')){
          return '/register/connect-calendar/?error=permissions'
      }

      return true
    }
  }
}

export default NextAuth(authOptions)