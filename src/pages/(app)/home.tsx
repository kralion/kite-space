import { ArticleCard } from "@/components/root/article.card";
import CardDashboard from "@/components/root/card";
import BarChart from "@/components/root/chart";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LucideBell,
  LucideEye,
  LucideHeart,
  LucideMail,
  LucidePersonStanding,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full space-y-4">
      <div className="flex px-10 justify-between">
        <div>
          <h1 className="text-3xl  ">Welcome Back, Cassie</h1>
          <p className="text-gray-500 mt-2 ">Activity Overview</p>
        </div>
        <div className="flex gap-2">
          <Input
            className="border-none w-72 bg-white rounded-xl"
            type="email"
            placeholder="Search"
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="group p-2">
                <LucideMail
                  className="duration-300 group-hover:fill-black group-hover:stroke-white "
                  size={20}
                />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Recent Messages</SheetTitle>
                <SheetDescription>
                  Here you can see the messages/responses to your post and the
                  interactions that you have with your followers and audience
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="items-center gap-4">
                  <div className="border flex gap-3 items-center rounded-xl p-4 w-full">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                        alt="user"
                      />
                      <AvatarFallback>YM</AvatarFallback>
                    </Avatar>
                    <div className="col-span-3">
                      <p className="font-bold">Yong Min</p>
                      <p className="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus, quidem?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Clear Mail</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="p-2 group" variant="ghost">
                <LucideBell
                  className="duration-300 group-hover:fill-black  "
                  size={20}
                />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  You haven't new Notifications
                </AlertDialogTitle>
                <AlertDialogDescription>
                  You're caught up! You have no new notifications to read.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="px-0">
                  <Button className="px-5">Close</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Sheet>
            <SheetTrigger asChild>
              <Avatar className="cursor-pointer active:opacity-80">
                <AvatarImage
                  src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                  alt="user"
                />
                <AvatarFallback>YM</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Recent Messages</SheetTitle>
                <SheetDescription>
                  Here you can see the messages/responses to your post and the
                  interactions that you have with your followers and audience
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="items-center gap-4">
                  <div className="border flex gap-3 items-center rounded-xl p-4 w-full">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                        alt="user"
                      />
                      <AvatarFallback>YM</AvatarFallback>
                    </Avatar>
                    <div className="col-span-3">
                      <p className="font-bold">Yong Min</p>
                      <p className="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus, quidem?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Clear Mail</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="bg-white p-10 space-y-5">
        <div className="flex justify-between items-center">
          <Select>
            <SelectTrigger className="w-[180px] ">
              <SelectValue placeholder="Select the period" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-slate-500 text-sm">
            Last Updated <span className="font-bold">12:40 PM</span>
          </p>
        </div>
        <div className="flex gap-4 ">
          <div>
            <div className=" flex gap-4 h-fit">
              <CardDashboard
                color="bg-purple-100"
                title="New Subscribers"
                count={3012}
                characterizer="people"
                percentage="10"
              >
                <LucidePersonStanding size={20} />
              </CardDashboard>
              <CardDashboard
                color="bg-green-100"
                title="Total Views"
                count={3012}
                characterizer="views"
                percentage="10"
              >
                <LucideEye className="fill-black stroke-white" size={20} />
              </CardDashboard>
              <CardDashboard
                color="bg-indigo-100"
                title="Engagement Rate"
                count={3012}
                characterizer="%"
                percentage="10"
              >
                <LucideHeart className="fill-black" size={20} />
              </CardDashboard>
            </div>
            <BarChart />
          </div>
          <ArticleCard />
        </div>
      </div>
    </div>

    // <div>
    //   <SignedOut>
    //     <SignInButton />
    //     <p>This content is public. Only signed out users can see this.</p>
    //   </SignedOut>
    //   <SignedIn>
    //     <SignOutButton signOutCallback={() => void redirect("/auth/login")} />
    //     <p>This content is private. Only signed in users can see this.</p>
    //   </SignedIn>
    // </div>
  );
}
