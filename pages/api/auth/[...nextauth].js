import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOption =  {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
};
export default NextAuth(authOption);