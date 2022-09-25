import { useState, useEffect } from 'react';

function getDimensions(margin, el) {
  const { innerWidth: width, innerHeight: height } = el;
  return {
    width:  width  - margin,
    height: height - margin
  };
}

export default function useDimensions(margin = 0, el = window) {
  const [dimensions, setDimensions] = useState(getDimensions(margin, el));

  useEffect(() => {
    function handleResize() {
      setDimensions(getDimensions(margin, el));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}
