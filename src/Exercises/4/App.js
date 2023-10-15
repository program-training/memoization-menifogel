import React from "react";
import ExpensiveProvider from "./ExpensiveProvider";
import ConsumerComponent from "./ConsumerComponent";

function App() {
  return (
    <div className="App">
      <ExpensiveProvider>
        <ConsumerComponent />
      </ExpensiveProvider>
    </div>
  );
}

export default App;
