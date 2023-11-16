import React from "react";
import Navbar from "./navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
