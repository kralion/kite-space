import { MoveLeft } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function ErrorPage() {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white  items-center justify-center h-screen  text-gray-900">
      <img
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7968.jpg?size=626&ext=jpg&ga=GA1.1.1405311743.1707842042&semt=ais"
        alt="Error"
        className="w-1/4  "
      />{" "}
      {/* Display the error image */}
      <h1 className="text-2xl font-semibold">Oops! Something went wrong.</h1>
      <p className="mt-2 mb-6 w-1/2 text-center">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <div className="mb-4 text-sm  text-gray-500">
        Error Type :{" "}
        <span className="text-primary font-semibold"> {error?.statusText}</span>
      </div>
      <Button
        className="flex  group items-center pl-5"
        onClick={() => navigate(-1)}
      >
        <MoveLeft
          size={20}
          className="group-hover:-translate-x-2 duration-300"
        />
        <span className="ml-2">Go back</span>
      </Button>
    </div>
  );
}
