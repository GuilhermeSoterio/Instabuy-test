import { useEffect, useRef, useState } from "react";

const useCarouselControl = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    checkScrollPosition();
  }, []);

  useEffect(() => {
    checkScrollPosition();
  }, [carousel]);

  const checkScrollPosition = () => {
    if (carousel.current) {
      const isAtBeginning = carousel.current.scrollLeft === 0;
      const isAtEnd =
        carousel.current.scrollLeft + carousel.current.offsetWidth >=
        carousel.current.scrollWidth;

      setIsBeginning(isAtBeginning);
      setIsEnd(isAtEnd);
    }
  };

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= 210;
      checkScrollPosition();
    }
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += 210;
      checkScrollPosition();
    }
  };

  return {
    carousel,
    isBeginning,
    isEnd,
    handleLeftClick,
    handleRightClick,
  };
};

export default useCarouselControl;