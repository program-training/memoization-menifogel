import React, { useState } from "react";
import ComplexComponent from "./ComplexComponent";

function App() {
  const [list, setList] = useState([
    { id: 1, value: "Item 1" },
    // ... more list items
  ]);

  return (
    <div className="App">
      <ComplexComponent list={list} />
    </div>
  );
}

export default App;
