import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export function ArticleCard() {
  return (
    <Card
      className="flex flex-col w-full justify-between h-80"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-psd/journal-cover-design-mockup_53876-57953.jpg?size=626&ext=jpg&ga=GA1.1.1214943181.1703785948&semt=sph)`,
      }}
    >
      <CardHeader>
        <div className="flex flex-col">
          <span className="bg-white  rounded-tr-xl px-3 pt-2 rounded-tl-xl w-fit">
            Maximizing
          </span>
          <span className="bg-white rounded-r-xl px-3 rounded-bl-xl w-fit p-2">
            Audience Engagament
          </span>
        </div>
      </CardHeader>

      <CardFooter className="flex gap-2 items-center">
        <Button variant="secondary" className="rounded-2xl">
          Read Article
        </Button>
        <Button variant="secondary" className="rounded-full p-2">
          <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
