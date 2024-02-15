import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div className="flex justify-center h-screen items-center">
      <Link to="/login">
        <Button>Login to Continue</Button>
      </Link>
      <Outlet />
    </div>
  );
}
