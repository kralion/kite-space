import Navbar from "@/components/_shared/navbar";

import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div className="flex font-poppins">
      <Navbar />
      <div className="space-y-5 w-full min-h-screen flex justify-center items-center  bg-zinc-200/50">
        <Outlet />
      </div>
    </div>
  );
}
