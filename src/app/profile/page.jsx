"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import { Edit } from "lucide-react";
import Link from "next/link";

const MyProfilePage = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div>
      <h2 className="my-5 text-center font-bold">My Profile</h2>
      <Card className="max-w-96 mx-auto flex-col items-center text-center">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            src={user?.image}
            alt={user?.name || "User Avatar"}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-bold">{user?.name}</h2>
        <p className="text-muted select-none">{user?.email}</p>

        <small className="text-muted-foreground text-gray-400">
          Last Updated:{" "}
          {user?.updatedAt
            ? new Date(user.updatedAt).toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })
            : "Never"}
        </small>

        <Link href="/profile/update-user">
          <Button variant="secondary" className="mt-4 w-full">
            <Edit size={16} className="mr-2" /> Update Profile
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default MyProfilePage;
