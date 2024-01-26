import AppleIcon from "@/assets/svg/apple.svg";
import FacebookIcon from "@/assets/svg/facebook.svg";
import GoogleIcon from "@/assets/svg/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function SignUpForm() {
  return (
    <div className="bg-gray-100 min-h-screen animate__animated animate__fadeIn flex items-center justify-center">
      <div className="max-w-md rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            By sign in into{" "}
            <span className="text-black font-semibold font-mono">
              Kite Space
            </span>{" "}
            , you accept our{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="#">
              terms{" "}
            </Link>
            and{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="#">
              privacy policy
            </Link>
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex justify-between">
            <div className="space-y-2">
              <Label htmlFor="email">Name</Label>
              <Input id="name" placeholder="Robert" required type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Last Name</Label>
              <Input id="lastname" placeholder="Clerk" required type="text" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="robert@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Password</Label>
            <Input id="email" placeholder="*********" required type="email" />
          </div>
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
            <Button className="w-full bg-black text-white">
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
        </div>
      </div>
    </div>
  );
}
