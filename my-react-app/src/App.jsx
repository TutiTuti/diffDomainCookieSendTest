// App.tsx
import React, { useState } from 'react'; // ✅ 이거 필요!
import { BrowserRouter as RouterProvider } from "react-router-dom";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <RouterProvider>
        <Router />
      </RouterProvider>
    </HelmetProvider>
  );
}

export default App;
