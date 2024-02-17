import Navbar from "@/components/_shared/navbar";
import { SignedIn } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
     <SignedIn>

    <div className="flex">
      <Navbar />
      <div className="space-y-5 w-full min-h-screen flex justify-center  items-center  bg-zinc-200/50">
        <Outlet />
      </div>
    </div>
     </SignedIn>
  );
}
