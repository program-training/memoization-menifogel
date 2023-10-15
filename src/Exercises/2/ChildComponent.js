import React from 'react';

const ChildComponent = ({ obj }) => {
  console.log('Rendered: ChildComponent');
  return <div>{obj.value}</div>;
};

export default ChildComponent;
