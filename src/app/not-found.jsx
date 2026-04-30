import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center text-amber-600 min-h-screen gap-y-3">
      <h2 className="text-2xl font-extrabold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        {" "}
        <Button fullWidth  variant="outline"> Go Back Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
