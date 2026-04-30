"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "sonner";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";

const RegistrationPage = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
      },
      {
        onSuccess: () => {
          router.refresh();
          router.push("/");
        },
      },
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterSubmit = async (data) => {
    const { name, email, password, image } = data;

    const { data: res, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image,
    });

    if (error) {
      toast.error(error.message || "Registration failed. Try again!", {
        position: "bottom-center",
      });
    } else {
      toast.success("Account created! Please login.", {
        position: "bottom-center",
      });
      router.push("/login");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <Card className="border py-10 mt-10 mb-20 sm:mt-24 shadow-xl rounded-2xl bg-white">
        <h1 className="text-center text-2xl font-bold mb-6 tracking-tight">
          Create Account
        </h1>

        <Form
          className="flex w-full max-w-sm mx-auto flex-col gap-4 px-2"
          onSubmit={handleSubmit(handleRegisterSubmit)}
        >
          <TextField isRequired name="name">
            <Label>Full Name</Label>
            <Input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your full name"
            />
            <FieldError>{errors.name?.message}</FieldError>
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
            />
            <FieldError>{errors.email?.message}</FieldError>
          </TextField>

          <TextField isRequired name="image" type="url">
            <Label>Photo URL</Label>
            <Input
              {...register("image", { required: "Photo link is required" })}
              placeholder="https://example.com/photo.jpg"
            />
            <FieldError>{errors.image?.message}</FieldError>
          </TextField>

          <TextField isRequired name="password">
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Minimum 8 characters" },
                })}
                className="w-full"
                type={isVisible ? "text" : "password"}
                placeholder="Create a password"
              />
              <InputGroup.Suffix className="pr-1">
                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>Min. 8 characters</Description>
            <FieldError>{errors.password?.message}</FieldError>
          </TextField>

          <div className="grid grid-cols-2 gap-4 w-full mt-2">
            <Button
              type="submit"
              className="w-full bg-[#C68B5F] text-white font-bold"
            >
              <Check />
              Register
            </Button>
            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </div>

          <p className="text-center my-2 text-gray-400">Or</p>

          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full border-gray-200"
          >
            <GrGoogle className="text-red-500" /> Sign Up With Google
          </Button>
        </Form>

        <p className="text-center my-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegistrationPage;
