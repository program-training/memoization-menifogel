import React, { useState } from "react";
import IntermediateComponent from "./IntermediateComponent";
import ChildComponent from "./ChildComponent";

function App() {
  const [data, setData] = useState({
    /* some data */
  });

  // TODO: Prevent unnecessary renders in IntermediateComponent when data changes.
  return (
    <div className="App">
      <IntermediateComponent data={data}>
        <ChildComponent data={data} />
      </IntermediateComponent>
    </div>
  );
}

export default App;
