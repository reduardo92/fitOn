import { useState, useEffect } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => console.log(count), []);
  return (
    <StateContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
