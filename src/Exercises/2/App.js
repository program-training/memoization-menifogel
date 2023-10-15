import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [obj, setObj] = useState({ value: "Initial" });

  return (
    <div className="App">
      <ChildComponent obj={obj} />
    </div>
  );
}

export default App;
