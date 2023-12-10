import { useState } from "react";

import { Button } from "@/components/ui/button";
import AppLayout from "./components/layout/app.layout.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppLayout>
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
