import NextAuth, {NextAuthOptions} from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {db} from "../../../lib/db";

export const authOptions: NextAuthOptions = ({
    adapter: PrismaAdapter(db),
    secret: process.env.AUTH_SECRET,
    providers: [
        GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
})

export default NextAuth(authOptions);
