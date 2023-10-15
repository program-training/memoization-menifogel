import React from 'react';

function ComplexComponent({ list }) {
  console.log('Rendered: ComplexComponent');

  // TODO: Optimize this section so that sorting doesn't happen on every render.
  const sortedList = list.sort((a, b) => a.value - b.value);

  return (
    <ul>
      {sortedList.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}

export default ComplexComponent;
