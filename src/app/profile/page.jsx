"use client";
import { UpdateUser } from "@/components/UpdateUser";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import Image from "next/image";

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

        <UpdateUser user={user}></UpdateUser>
      </Card>
    </div>
  );
};

export default MyProfilePage;
