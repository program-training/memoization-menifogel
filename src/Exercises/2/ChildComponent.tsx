import {memo } from 'react';

interface Props {
    obj: {
      value: string;
    }
}

function isEqual(prev: Props, next: Props) {
    return prev.obj.value === next.obj.value; 
  }
  

const ChildComponent = ({ obj }:Props) => {
  console.log('Rendered: ChildComponent');
  return <div>{obj.value}</div>;
};

export default memo(ChildComponent, isEqual);