import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
import { MoveRight } from "lucide-react";
import Gradient from "@/assets/gradient.png";
export default function Root() {
  return (
    <div
      style={{
        backgroundImage: `url(${Gradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-center  h-screen items-center"
    >
      <SignIn path="/login" routing="path" />
      <div className="flex flex-col gap-8 items-center lg:w-1/2 w-2/3">
        <img
          width={80}
          height={80}
          className="rounded-full shadow-lg"
          src="https://cdn-icons-png.flaticon.com/128/7721/7721025.png"
        />
        <h1 className="scroll-m-20 text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-black/90 to-zinc-700 font-extrabold tracking-tight lg:text-5xl">
          Kite Space
        </h1>
        <p className=" w-2/3 text-sm mx-auto hidden animate__animated animate__fadeIn lg:inline-flex text-center">
          A platform for content creators to track their analytics, monetize
          their content, connect—with their audience and and grow their brand.
        </p>
        <p className=" lg:hidden animate__animated animate__fadeIn   text-center">
          Platform for creators that wants to engage with their—
          <span className="underline"> audience</span> and —
          <span className="underline">grow their brand.</span>
        </p>
        <Link to="/login">
          <Button className="group px-8 rounded-lg">
            Join to Waitlist
            <MoveRight className=" ml-2 duration-500 group-hover:translate-x-3" />
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
