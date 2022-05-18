import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('サインイン')
      return true
    },
    async session({ session, user, token }) {
      session = { ...session, id: 1 }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(`account:${JSON.stringify(account)}`)
      return token
    },
  },
  secret: 'secret',
})
