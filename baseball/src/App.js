import React from "react";
import "./App.css";

import { BaseballFunctions } from "./utils/BaseballFunctions";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const { strikes, balls, ...baseballFunctions } = BaseballFunctions();
  return (
    <div>
      Baseball
      <Display strikes={strikes} balls={balls} />
      <Dashboard baseballFunctions={baseballFunctions} />
    </div>
  );
}

export default App;
