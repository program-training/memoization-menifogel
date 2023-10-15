import React from "react";

const IntermediateComponent = ({ children }) => {
  console.log("Rendered: IntermediateComponent");
  return <div>{children}</div>;
};

export default IntermediateComponent;
