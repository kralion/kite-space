import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Contact from "./routes/contact.tsx";
import Root from "./routes/root";
import { Button } from "@/components/ui/button";
import AppLayout from "./components/layout/app.layout.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppLayout>
      <RouterProvider router={router} />
      <Button>Click me</Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </AppLayout>
  );
}

export default App;
