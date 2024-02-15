import { ClerkProvider } from "@clerk/clerk-react";
import "animate.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignIn from "./pages/(auth)/login";
import SignUp from "./pages/(auth)/sign-up";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Community from "./pages/(app)/community";
import HelpCenter from "./pages/(app)/help-center";
import Home from "./pages/(app)/home";
import "./index.css";
import Settings from "./pages/(app)/settings";
import Statistics from "./pages/(app)/statistics";
import Layout from "./pages/(app)/layout";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
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
    <ClerkProvider
      signInUrl="/src/pages/(auth)/login.tsx"
      signUpUrl="/src/pages/(auth)/sign-up.tsx"
      publishableKey={PUBLISHABLE_KEY}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
