// import React, { Suspense, useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { lazy, Suspense } from "react";

function App() {
  //   const [count, setCount] = useState(0)
  const Button = lazy(() => import("anyModuleName/ExposingButton"));

  return (
    <>
      <div>
        <h3>These Images are from container repo</h3>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Suspense>
        <Button>Received Button</Button>
      </Suspense>
    </>
  );
}

export default App;
