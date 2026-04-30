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
import { GrGoogle } from "react-icons/gr";
import { toast } from "sonner";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const handleLoginSubmit = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email(
      {
        email: email,
        password: password,
        rememberMe: true,
      },
      {
        onSuccess: () => {
          router.refresh();
          router.push("/");
        },
      },
    );
    if (error) {
      toast.error("Error Logging in, try again!", error.message, {
        position: "bottom-center",
      });
    }
    if (res) {
      toast.success("Login successful!", { position: "bottom-center" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <Card className="border py-10 mt-20 sm:mt-40 shadow-xl rounded-2xl bg-white">
        <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

        <Form
          className="flex w-full max-w-sm mx-auto flex-col gap-4 px-2"
          onSubmit={handleSubmit(handleLoginSubmit)}
        >
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input {...register("email")} placeholder="Enter your email" />
            <FieldError />
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
                placeholder="Enter your password"
              />
              <InputGroup.Suffix className="pr-1">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
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
            <FieldError />
          </TextField>

          <div className="grid grid-cols-2 gap-4 w-full">
            <Button type="submit" className="w-full bg-[#C68B5F] text-white">
              <Check />
              Login
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
            <GrGoogle className="text-red-500" /> Sign In With Google
          </Button>
        </Form>
        <p className="text-center my-4">
          Don't have an account?{" "}
          <Link href="/registration" className="text-blue-600 hover:underline">
            Register Now
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
