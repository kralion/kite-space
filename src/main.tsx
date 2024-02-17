import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "@/components/ui/toaster";
import "animate.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Community from "./pages/(app)/community";
import HelpCenter from "./pages/(app)/help-center";
import Home from "./pages/(app)/home";
import Layout from "./pages/(app)/layout";
import Settings from "./pages/(app)/settings";
import Statistics from "./pages/(app)/statistics";
import SignIn from "./pages/(auth)/login";
import SignUp from "./pages/(auth)/sign-up";
import Root from "./routes/root";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/app/home",
        element: <Home />,
      },
      {
        path: "/app/statistics",
        element: <Statistics />,
      },
      {
        path: "/app/community",
        element: <Community />,
      },

      {
        path: "/app/settings",
        element: <Settings />,
      },
      {
        path: "/app/help-center",
        element: <HelpCenter />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </React.StrictMode>
);
