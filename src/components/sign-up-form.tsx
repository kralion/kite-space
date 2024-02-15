import AppleIcon from "@/assets/svg/apple.svg";
import FacebookIcon from "@/assets/svg/facebook.svg";
import GoogleIcon from "@/assets/svg/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpSchema } from "@/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    console.log(data);
  };
  return (
    <div className="bg-gray-100 min-h-screen animate__animated animate__fadeIn flex items-center justify-center">
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
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-zinc-500 text-xs dark:text-zinc-400">
            By creating an account into <strong>KiteSpace</strong> , you accept
            our{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="#">
              terms{" "}
            </Link>
            and{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="#">
              privacy policy
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between">
            <div className="space-y-2">
              <Label htmlFor="email">Name</Label>
              <Input
                {...register("name")}
                id="name"
                placeholder="Robert"
                required
                type="text"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Last Name</Label>
              <Input
                {...register("lastName")}
                id="lastname"
                placeholder="Clerk"
                required
                type="text"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="robert@example.com"
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
              placeholder="*********"
              required
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full ">
            Sign Up
          </Button>
          <div className="flex items-center space-x-2">
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
          </div>
          <div className="space-y-4">
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
          <div className="flex items-center justify-end">
            <span className=" font-mono tracking-tighter  text-xs ">
              Already have an Account?
            </span>
            <Link to="/login">
              <Button
                className="text-blue-500 px-2 font-mono tracking-tighter text-xs hover:text-blue-700"
                variant="link"
              >
                Log In
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
