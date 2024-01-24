import { Badge } from "@/components/ui/badge";

export default function HelpCenter() {
  return (
    <div className="animate__animated animate__fadeIn flex gap-2 items-center">
      <h1 className="  text-3xl font-bold ">Help Center</h1>
      <Badge className="bg-gradient-to-r from-black to-purple-500">
        Comming Soon
      </Badge>
    </div>
  );
}
