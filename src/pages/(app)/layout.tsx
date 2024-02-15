import Navbar from "@/components/_shared/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <Navbar />
      <div className="space-y-5 w-full min-h-screen flex justify-center  items-center  bg-zinc-200/50">
        <Outlet />
      </div>
    </div>
  );
}
