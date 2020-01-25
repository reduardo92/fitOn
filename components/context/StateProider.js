import { useState, useEffect } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(0);

  const setCarosuel = (tablet = 3, laptop = 4) => {
    if (windowSize < 768) {
      return 1;
    } else if (windowSize <= 768 || windowSize < 1280) {
      return tablet;
    } else if (windowSize >= 1280) {
      return laptop;
    }
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  console.log(windowSize);
  console.log(setCarosuel());

  return (
    <StateContext.Provider
      value={{
        windowSize,
        setCarosuel
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
