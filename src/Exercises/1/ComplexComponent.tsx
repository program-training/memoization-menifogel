import { useMemo } from 'react';

interface Item {
    id: number;
    value: string; 
  }
  
  interface Props {
    list: Item[];
  }

function ComplexComponent({ list }:Props) {
  console.log('Rendered: ComplexComponent');

  // TODO: Optimize this section so that sorting doesn't happen on every render.
  const sortedList = useMemo(() => {
    return list.sort((a, b) => a.value - b.value);
  }, [list]);

  return (
    <ul>
      {sortedList.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}

export default ComplexComponent;
