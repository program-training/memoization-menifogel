import React, { useState } from 'react';
import ListComponent from './ListComponent';

function App() {
  const [list, setList] = useState([
    { id: 1, value: 'Item 1' },
    // ... more list items
  ]);

  return (
    <div className="App">
      <ListComponent list={list} />
    </div>
  );
}

export default App;
s