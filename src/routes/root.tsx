import AppLayout from "@/components/layout/app.layout";
import CardDashboard from "@/components/root/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnnouncementAsset from "@/assets/images/announcement.png";
import {
  LucideBell,
  LucideEye,
  LucideHeart,
  LucideMail,
  LucidePersonStanding,
} from "lucide-react";

export default function Root() {
  return (
    <AppLayout>
      <div className="flex px-10 justify-between ">
        <div>
          <h1 className="text-3xl  ">Welcome Back, Cassie</h1>
          <p className="text-gray-500 mt-2 text-xl">Statatistics Overview</p>
        </div>
        <div className="flex gap-5 items-center">
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
      <div className="bg-white px-10 py-5 ">
        <div className="flex justify-between">
          <CardDashboard
            color="purple"
            title="New Subscribers"
            count={3012}
            characterizer="people"
            percentage="10"
          >
            <LucidePersonStanding size={20} />
          </CardDashboard>
          <CardDashboard
            color="green"
            title="Total Views"
            count={3012}
            characterizer="people"
            percentage="10"
          >
            <LucideEye className="fill-black stroke-white" size={20} />
          </CardDashboard>
          <CardDashboard
            color="indigo"
            title="Engagement Rate"
            count={3012}
            characterizer="people"
            percentage="10"
          >
            <LucideHeart className="fill-black" size={20} />
          </CardDashboard>
        </div>
        <img
          src={AnnouncementAsset}
          alt="announcement"
          className="mt-10 bg-black rounded-xl"
        />
      </div>
    </AppLayout>
  );
}
