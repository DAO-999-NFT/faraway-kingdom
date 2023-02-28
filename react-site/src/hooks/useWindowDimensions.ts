import {useEffect, useState} from 'react';

type winSize = {width: number; height: number};

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState<winSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
