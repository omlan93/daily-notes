import NextAuth from "next-auth";
import { connect } from "@/app/dbConfig/dbConfig";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import User from "@/models/userModel";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || " ";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID || "",
      clientSecret: process.env.AUTH_FACEBOOK_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: any) {
      console.log(profile);
      console.log(account);

      if (!profile?.email) {
        throw new Error("No Profile");
      }

      console.log("first");

      await connect();
      console.log("first");
      const user = await User.findOne({ email: profile.email });

      console.log(user);

      if (!user) {
        const newUser = new User({
          username: profile.name,
          email: profile.email,
          // password: "hihihihihih",
        });
        console.log(newUser);
        await newUser.save();
      }

      return true;
    },
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
});
