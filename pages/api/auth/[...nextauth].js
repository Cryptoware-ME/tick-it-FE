import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if(account) {
                token.accessToken = account.access_token
                token.account = account
            }
            return token
        },
        async session({ session, token, user }){
            session.accessToken = token.accessToken
            session.token = token
            return session
        }
    },
    secret:process.env.NEXT_PUBLIC_JWT_SECRET,
})