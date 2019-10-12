import React from "react";
import "./App.css";

import baseballFunctions from "./utils/baseballFunctions";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const { strikes, balls, ...baseballFunctions } = baseballFunctions();
  return (
    <div>
      Baseball
      <Display strikes={strikes} balls={balls} />
      <Dashboard baseballFunctions={baseballFunctions}/>
    </div>
  );
}

export default App;
