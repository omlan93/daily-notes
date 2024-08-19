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
import { Button } from "@/components/ui/button";

export default async function SignIn() {
  const session = await auth();
  return (
    <main className="flex flex-col min-h-screen bg-blue-300 justify-center items-center">
      {" "}
      <form
        action={async () => {
          "use server";
          console.log(session);
          await signIn("google", { redirectTo: "/profile" });
        }}
      >
        <Button
          type="submit"
          variant="secondary"
          className="font-bold text-lg h-12 mb-10"
          size="lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="80"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Sign in With Google
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          console.log(session);
          await signIn("facebook", { redirectTo: "/profile" });
        }}
      >
        <Button
          type="submit"
          variant="secondary"
          className="font-bold text-lg h-12 w-65"
          size="lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="80"
            height="50"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1"
              x1="6.228"
              x2="42.077"
              y1="4.896"
              y2="43.432"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#0d61a9"></stop>
              <stop offset="1" stop-color="#16528c"></stop>
            </linearGradient>
            <path
              fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
              d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
            ></path>
            <path
              d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
              opacity=".05"
            ></path>
            <path
              d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
              opacity=".07"
            ></path>
            <path
              fill="#fff"
              d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
            ></path>
          </svg>
          Sign in With Facebook
        </Button>
      </form>
    </main>
  );
}
