import React from "react";
import Navbar from "./navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex font-poppins">
      <Navbar />
      <div className="pt-12 px-10 bg-background">{children}</div>
    </div>
  );
}
