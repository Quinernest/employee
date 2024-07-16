import React from "react";
import Employees from "./components/employee";
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Employee list</h1>
        <Employees />
      </header>
    </div>
  );
}

export default App;
