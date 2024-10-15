// import React, { Suspense, useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { lazy, Suspense } from "react";
import { useAtom } from "jotai";
import { counterAtom } from "./jotai_stateManage";

function App() {
  //   const [count, setCount] = useState(0)
  const Button = lazy(() => import("anyModuleName/ExposingButton"));
  const [count, setCount] = useAtom(counterAtom);

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
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <Suspense>
        <Button>Received Button</Button>
      </Suspense>
    </>
  );
}

export default App;
