import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import { Link, useLocation, redirect } from "react-router-dom";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

export default function Navbar() {
  const location = useLocation();
  const tabItems = [
    {
      label: "Home",
      icon: <Home />,
      path: "/app/home",
    },
    {
      label: "Statistics",
      icon: <LineChart />,
      path: "/app/statistics",
    },
    {
      label: "Community",
      icon: <Users />,
      path: "/app/community",
    },
    {
      label: "Settings",
      icon: <Settings />,
      path: "/app/settings",
    },
    {
      label: "Help-center",
      icon: <HelpCircle />,
      path: "/app/help-center",
    },
  ];

  return (
    <div className="bg-primary shadow-xl w-fit py-5 text-white h-screen items-center flex flex-col justify-between  ">
      <div className="space-y-20  ">
        <Link className="flex flex-col items-center" to="/">
          <img
            className="mx-auto bg-white rounded-full cursor-pointer active:opacity-80"
            width={34}
            height={34}
            src="https://cdn-icons-png.flaticon.com/128/7721/7721025.png"
            alt="Kite Logo"
          />
        </Link>
        <div className=" flex flex-col gap-5 items-center ">
          {tabItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link key={item.label} to={item.path} className="w-full">
                      <Button
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="secondary" className="rounded-xl p-2 w-9 h-9">
              <Plus size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Your Post</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              New Post
              <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Schedule</DropdownMenuItem>
            <DropdownMenuItem>New Collection</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <SignedIn>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-zinc-800 hover:bg-zinc-800 active:bg-zinc-900 rounded-xl p-2 w-9 h-9">
                <LogOut />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Remember that after the logout you should be enter your
                  credentials again
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="px-0">
                  <SignOutButton
                    signOutCallback={() => {
                      redirect("/login");
                    }}
                  >
                    <Button variant="destructive" className="px-5">
                      Logout
                    </Button>
                  </SignOutButton>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SignedIn>
      </div>
    </div>
  );
}
