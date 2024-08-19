import { redirect } from "next/dist/server/api-utils";
import { signOut } from "../../../auth";
import { Button } from "@/components/ui/button";

export default function SignOutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-300">
      <h4 className="mb-4">Are you sure you want to sign out?</h4>
      <form
        action={async (formData) => {
          "use server";
          await signOut({ redirectTo: "/", redirect: true });
          console.log("Sign out");
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}
