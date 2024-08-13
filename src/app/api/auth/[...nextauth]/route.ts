// import { connect } from "@/app/dbConfig/dbConfig";
// import { Session } from "inspector";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import User from "@/models/userModel";
// import email from "next-auth/providers/email";
// import { NextAuthOptions } from "next-auth";

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || " ";
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, profile }: any) {
//       if (!profile?.email) {
//         throw new Error("No Profile");
//       }

//       await connect();
//       const user = User.findOne({ email: profile.email });

//       if (!user) {
//         const newUser = new User({
//           username: profile.name,
//           email: profile.email,
//           password: "hihihihihih",
//         });
//         await newUser.save();
//       }
//       return true;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GEt, handler as POST };

import { handlers } from "../../../../../auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
