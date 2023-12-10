import { ArrowLeftFromLine, RotateCw } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function ErrorPage() {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-gray-900">
      <img
        src="https://img.freepik.com/free-vector/glitch-web-background_23-2148097009.jpg?size=626&ext=jpg&ga=GA1.1.249782534.1702211534&semt=ais"
        alt="Error"
        className="w-64 mb-8"
      />{" "}
      {/* Display the error image */}
      <h1 className="text-2xl font-semibold">Oops! Something went wrong.</h1>
      <p className="mt-2 mb-6 w-1/3 text-center">
        We're sorry for the inconvenience. Please choose one of the options
        below to get back on track.
      </p>
      <div className="mb-4 text-sm  text-gray-500">
        Error Trigger :{" "}
        <span className="text-primary font-semibold"> {error?.statusText}</span>
      </div>
      <div className="flex gap-5 mt-10">
        <Button
          className="flex gap-2 items-center"
          onClick={() => navigate("/")}
        >
          <ArrowLeftFromLine size={20} />
          <span className="ml-2">Go Home</span>
        </Button>
        <Button
          variant="secondary"
          className="flex gap-2 items-center"
          onClick={() => window.location.reload()}
        >
          <RotateCw size={20} />
          <span className="ml-2">Retry</span>
        </Button>
      </div>
    </div>
  );
}
