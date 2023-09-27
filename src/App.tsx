import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const numbers = useQuery(api.myFunctions.listNumbers, { count: 10 });
  const addNumber = useMutation(api.myFunctions.addNumber);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Convex + React (Vite)</h1>
      <div className="card">
        <p>
          Click the button and open this page in another window - this data is
          persisted in the Convex cloud database!
        </p>
        <button
          onClick={() => {
            void addNumber({ value: Math.floor(Math.random() * 10) });
          }}
        >
          Add a random number
        </button>
        <p>Numbers: {numbers?.join(", ") ?? "..."}</p>
      </div>
      <p>
        Edit <code>convex/myFunctions.ts</code> to change your backend
      </p>
    </>
  );
}

export default App;
