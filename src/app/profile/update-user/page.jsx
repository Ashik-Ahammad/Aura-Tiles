"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Surface, TextField, Card } from "@heroui/react";
import { User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";


const UpdateProfilePage = () => {

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value || user?.name;
    const image = e.target.image.value || user?.image;

    const { error } = await authClient.updateUser({
      image,
      name,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated successfully!");
      router.push("/profile");
      router.refresh();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-6">
      <Link href="/profile" className="flex items-center gap-2 text-sm text-gray-500 mb-6 hover:text-black">
        <ArrowLeft size={16} /> Back to Profile
      </Link>

      <Card className="p-8 shadow-xl border rounded-2xl bg-white">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-[#C68B5F]/10 rounded-full text-[#C68B5F]">
            <User size={24} />
          </div>
          <h1 className="text-2xl font-bold">Update Profile</h1>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <TextField className="w-full" name="name" type="text">
            <Label className="font-bold">Name</Label>
            <Input defaultValue={user?.name} placeholder="Enter your name" required/>
          </TextField>

          <TextField className="w-full" name="image" type="url">
            <Label className="font-bold">Image URL</Label>
            <Input defaultValue={user?.image} placeholder="Enter your image url" required/>
          </TextField>

          <div className="flex flex-col gap-3 mt-4">
            <Button type="submit" className="w-full  text-white font-bold h-12">
              Save Changes
            </Button>
            <Button
              variant="outline"
              onPress={() => router.back()}
              className="w-full font-medium"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default UpdateProfilePage;