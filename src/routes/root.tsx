import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
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
      <div className="flex flex-col gap-5 items-center">
        <img
          className="mx-auto cursor-pointer active:opacity-80"
          src="https://cdn-icons-png.flaticon.com/128/7721/7721025.png"
        />
        <Link to="/login">
          <Button>Login to Continue</Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
