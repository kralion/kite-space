import React, { useState } from "react";
import { Home } from "lucide-react";
import { Button } from "../ui/button";
import { clsx } from "clsx";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const tabItems = [
    "Overview",
    "Integration",
    "Billing",
    "Transactions",
    "plans",
  ];

  return (
    <div className="bg-primary grid grid-flow-row w-20 h-screen gap-3 ">
      {tabItems.map((item) => (
        <Button
          key={item}
          onClick={() => {}}
          className={clsx({
            "rounded-none border-l-2 border-white": location.pathname.includes(
              item.toLowerCase()
            ),
            "": !location.pathname.includes(item.toLowerCase()),
          })}
        >
          <Home size={24} />
        </Button>
      ))}
    </div>
  );
}
