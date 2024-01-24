import { ArticleCard } from "@/components/root/article.card";
import CardDashboard from "@/components/root/card";
import BarChart from "@/components/root/chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
          <p className="text-gray-500 mt-2 text-xl">Statatistics Overview</p>
        </div>
        <div className="flex gap-5 ">
          <Input
            className="border-none bg-white rounded-xl"
            type="email"
            placeholder="Search"
          />

          <Button variant="secondary">
            <LucideBell className="fill-black" size={20} />
          </Button>
          <Button variant="secondary" className="group">
            <LucideMail className="fill-black stroke-white " size={20} />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
  );
}
