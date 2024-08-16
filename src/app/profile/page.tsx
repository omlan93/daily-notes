import UserAvatar from "@/components/UserAvatar";
import { auth } from "../../../auth";

async function ProfilePage() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <main>
      <div className="flex flex-col min-h-screen items-center justify-center relative bg-blue-300 text-black">
        <p>
          {session?.user.name}, {session?.user.email}
        </p>
      </div>
    </main>
  );
}

export default ProfilePage;
