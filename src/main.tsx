import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Community from "./pages/community";
import HelpCenter from "./pages/help-center";
import Home from "./pages/home";
import Settings from "./pages/settings";
import Statistics from "./pages/statistics";
import Root from "./routes/root";
import Login from "./pages/(auth)/login";
import SignUp from "./pages/(auth)/sign-up";
import "animate.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/community",
        element: <Community />,
      },

      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/help-center",
        element: <HelpCenter />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
