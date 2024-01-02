import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideArrowUpRight, LucidePersonStanding } from "lucide-react";
import { Button } from "../ui/button";
type CardProps = {
  color: string;
  title: string;
  percentage: string;
  children: React.ReactNode;
  count: number;
  characterizer: string;
};

export default function CardDashboard({
  color,
  count,
  characterizer,
  title,
  percentage,
  children,
}: CardProps) {
  return (
    <Card className={`border-none rounded-xl bg-${color}-200 w-[270px]`}>
      <CardHeader>
        <CardTitle className="flex text-md justify-between items-center">
          <h1>{title}</h1>
          <Button variant="ghost">
            {percentage}%{" "}
            <LucideArrowUpRight className="text-zinc-500" size={20} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <div className="flex items-end gap-1">
          <h1 className="text-3xl">{count}</h1>
          <span className="text-zinc-500 font-light">{characterizer}</span>
        </div>
        <Button variant="secondary" className="bg-white">
          {children}
        </Button>
      </CardContent>
    </Card>
  );
}
