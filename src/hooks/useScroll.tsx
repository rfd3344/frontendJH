import { useState, useEffect } from 'react';

const useScroll = (scrollRef: any) => {
  const [pos, setPos] = useState([0, 0]);

  useEffect(() => {
    function handleScroll() {
      setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
    }
    scrollRef.current.addEventListener('scroll', handleScroll, false);
    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  return pos;
};

export default useScroll;
