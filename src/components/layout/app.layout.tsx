import React from "react";
import Navbar from "./navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex font-poppins">
      <Navbar />
      <div className="pt-12 space-y-5 w-full  bg-zinc-200/50">{children}</div>
    </div>
  );
}
