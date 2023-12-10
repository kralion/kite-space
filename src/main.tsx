import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Contact from "./routes/contact";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "statistics",
        element: <Contact />,
        // loader: teamLoader,
      },
      {
        path: "people",
        element: <Contact />,
        // loader: teamLoader,
      },
      {
        path: "billing",
        element: <Contact />,
        // loader: teamLoader,
      },
      {
        path: "settings",
        element: <Contact />,
        // loader: teamLoader,
      },
      {
        path: "help",
        element: <Contact />,
        // loader: teamLoader,
      },

      {
        path: "contacts/:contactId",
        element: <Contact />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
