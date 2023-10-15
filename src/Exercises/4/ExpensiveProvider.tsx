import React from 'react';
import ExpensiveContext from './ExpensiveContext';

function ExpensiveProvider({ children }) {
  // TODO: Optimize this section so that the expensive computation is not run on every render.
  const value = {/* expensive computation results */};

  return (
    <ExpensiveContext.Provider value={value}>
      {children}
    </ExpensiveContext.Provider>
  );
}

export default ExpensiveProvider;
