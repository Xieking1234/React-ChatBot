import { useRef, useEffect } from 'react'


export function useAutoScroll(dependencies) {
  const containerRef = useRef(null);


  useEffect(() => {
    const conatinerElem = containerRef.current;
    if(conatinerElem) {
      conatinerElem.scrollTop = conatinerElem.scrollHeight;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return containerRef;
}