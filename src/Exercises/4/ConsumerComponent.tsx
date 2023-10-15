import React, { useContext } from "react";
import ExpensiveContext from "./ExpensiveContext";

function ConsumerComponent() {
  const value = useContext(ExpensiveContext);
  // render using the context value
  
  return <div>{/* render using value */}</div>;
}

export default ConsumerComponent;
