import { useState } from "react";
import ComplexComponent from "./ComplexComponent";

function App1() {
  const [list, setList] = useState([
    { id: 1, value: "Item 1" },
  ]);

  return (
    <div className="App">
      <ComplexComponent list={list} />
    </div>
  );
}

export default App1;
