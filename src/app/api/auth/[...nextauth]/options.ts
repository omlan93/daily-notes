// import CredentialsProvider from "next-auth/providers/credentials";
// import bcryptjs from "bcryptjs";
// import User from "@/models/userModel";
// import credentials from "next-auth/providers/credentials";
// import { connect } from "@/app/dbConfig/dbConfig";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: any): Promise<any> {
//         await connect();
//         try {
//           const user = await User.findOne({
//             $or: [
//               { email: credentials.identifier },
//               { username: credentials.identifier },
//             ],
//           });

//           if (!user) {
//             throw new Error("No user found");
//           }

//           if (!user.isVerified) {
//             throw new Error("Please verify your email");
//           }

//           const validPassword = await bcryptjs.compare(
//             credentials.password,
//             user.password
//           );

//           if (!validPassword) {
//             throw new Error("Invalid password");
//           } else {
//             return user;
//           }
//         } catch (error: any) {
//           throw new Error(error);
//         }
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/sign-in",
//   },

//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };
