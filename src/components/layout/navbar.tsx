import clsx from "clsx";
import {
  HelpCircle,
  Home,
  LineChart,
  LogOut,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const location = useLocation();
  const tabItems = [
    {
      label: "Home",
      icon: <Home />,
      path: "/",
    },
    {
      label: "statistics",
      icon: <LineChart />,
      path: "/statistics",
    },
    {
      label: "people",
      icon: <Users />,
      path: "/people",
    },
    {
      label: "settings",
      icon: <Settings />,
      path: "/settings",
    },
    {
      label: "help",
      icon: <HelpCircle />,
      path: "/help",
    },
  ];

  return (
    <div className="bg-primary shadow-xl w-fit py-5 text-white h-screen items-center flex flex-col justify-between  ">
      <div className="space-y-20  ">
        <Link className="flex flex-col items-center" to="/">
          <img
            src="/src/assets/kite.png"
            className="w-1/2 active:opacity-80"
            alt="logo"
          />
        </Link>
        <div className=" flex flex-col gap-5 items-center ">
          {tabItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link to={item.path} className="w-full">
                <Button
                  key={item.label}
                  className={clsx(
                    "w-full transition-all duration-500",
                    twMerge([
                      isActive
                        ? "rounded-none border-l-2 border-white text-white"
                        : "border-l-2 border-transparent text-zinc-500",
                    ])
                  )}
                >
                  {React.cloneElement(item.icon, { size: 20 })}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Button variant="secondary" className="rounded-xl p-2 w-9 h-9">
          <Plus size={20} />
        </Button>
        <Button className="bg-zinc-800 hover:bg-zinc-800 active:bg-zinc-900 rounded-xl p-2 w-9 h-9">
          <LogOut />
        </Button>
      </div>
    </div>
  );
}
