import AppleIcon from "@/assets/svg/apple.svg";
import GoogleIcon from "@/assets/svg/google.svg";
import FacebookIcon from "@/assets/svg/facebook.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ShieldHalf } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas/auth";
import { useSignIn } from "@clerk/clerk-react";
import { z } from "zod";
export function LoginForm() {
  const { signIn } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    console.log(data);
    try {
      if (signIn) {
        await signIn({
          identifier: data.email,
          password: data.password,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-zinc-100 animate__animated animate__fadeIn lg:p-0 p-5 min-h-screen flex items-center justify-center">
      <div className="max-w-md rounded-xl shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <Link to="/">
            <img
              className="mx-auto cursor-pointer active:opacity-80"
              width={64}
              height={64}
              src="https://cdn-icons-png.flaticon.com/128/7721/7721025.png"
            />
          </Link>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-zinc-500 text-xs dark:text-zinc-400">
            By logging in, you accept our{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="#">
              terms{" "}
            </Link>
            and{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="#">
              privacy policy
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Password</Label>
            <Input
              {...register("password")}
              id="password"
              placeholder="********"
              required
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full ">
            Log In
          </Button>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
              <span className="text-zinc-400 dark:text-zinc-300 text-sm">
                OR
              </span>
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            </div>
            <Button className="w-full " variant="outline">
              <div className="flex items-center justify-center">
                <img src={GoogleIcon} className="w-5 h-5 mr-2" />
                Login with Google
              </div>
            </Button>
            <Button variant="outline" className="w-full  ">
              <div className="flex items-center justify-center">
                <img src={AppleIcon} className="w-5 h-5 mr-2" />
                Login with Apple
              </div>
            </Button>
            <Button className="w-full" variant="outline">
              <div className="flex items-center justify-center">
                <img src={FacebookIcon} className="w-5 h-5 mr-2" />
                Login with Google
              </div>
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="link"
                  className="text-blue-500 font-mono tracking-tighter  text-xs hover:text-blue-700"
                >
                  Forgot password?
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Verification Required</AlertDialogTitle>
                  <AlertDialogDescription>
                    Before proceeding, be sure to check your email for a link to
                    verify your account.{" "}
                    <span className="underline">
                      {" "}
                      This should be a real email address.
                    </span>
                    <div className="space-y-3 my-8">
                      <Label
                        htmlFor="email"
                        className="flex gap-1 items-center"
                      >
                        <ShieldHalf className="w-4 h-4" />
                        Recovery Email
                      </Label>
                      <Input
                        placeholder=" Type your email here"
                        required
                        type="email"
                      />
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="px-0">
                    <Link to="/login">
                      <Button className="px-5">Send Verification Email</Button>
                    </Link>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link to="/sign-up">
              <Button
                className="text-blue-500 font-mono tracking-tighter text-xs hover:text-blue-700"
                variant="link"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
