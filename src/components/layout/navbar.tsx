import React from "react";
import { Home } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="bg-primary grid grid-flow-row w-20 h-screen gap-3 ">
      <Button>
        <Home />
      </Button>
      <Button>
        <Home />
      </Button>
      <Button>
        <Home />
      </Button>
      <Button>
        <Home />
      </Button>
    </div>
  );
}
