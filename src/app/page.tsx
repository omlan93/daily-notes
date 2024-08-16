// import { signIn } from "../../auth";

// export default function SignIn() {
//   const onclick = async () => {
//     "use server";
//     await signIn();
//   };
//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-blue-300">
//       <h1 className="text-4xl text-blue-900 mb-8">
//         Welcome to <span className="text-6xl ml-4">Daily Notes</span>
//       </h1>

//       <button
//         onClick={onclick}
//         className="text-2xl text-white bg-blue-700 rounded-md w-40 h-10"
//       >
//         Sign in
//       </button>
//     </div>
//   );
// }
import { signIn } from "../../auth";
import { auth } from "../../auth";

export default async function SignIn() {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        console.log(session);
        await signIn("google", { redirectTo: "/profile" });
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  );
}
