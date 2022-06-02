import React, { useEffect, useState } from 'react';

export type ScrollPosition = {
  scrollX: number;
  scrollY: number;
};

const useScroll = (
  container?: HTMLElement,
  callback?: (scrollPosition: ScrollPosition) => void
): ScrollPosition => {
  let target: HTMLElement;
  let eventTarget: HTMLElement | Window;

  if (container && container !== document.documentElement) {
    target = container;
    eventTarget = container;
  } else {
    target = document.documentElement;
    eventTarget = window;
  }

  const [scrollX, setScrollX] = useState(target.scrollLeft);
  const [scrollY, setScrollY] = useState(target.scrollTop);

  useEffect(() => {
    const scrollListener = () => {
      const scrollPosition = {
        scrollX: target.scrollLeft,
        scrollY: target.scrollTop,
      };

      setScrollX(scrollPosition.scrollX);
      setScrollY(scrollPosition.scrollY);

      callback && callback(scrollPosition);
    };

    eventTarget.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      eventTarget.removeEventListener('scroll', scrollListener);
    };
  });

  return { scrollX, scrollY };
};

export default useScroll;
