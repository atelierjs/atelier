import React from 'react';
import { AtelierVoidComponent, Button, Fade } from '@components';
import Scroll from 'react-scroll';
import clsx from 'clsx';
import { useScroll } from '@hooks';

const scroller = Scroll.animateScroll;

const ScrollTracker: AtelierVoidComponent = (className, ...props) => {
  const scrollPosition = useScroll();

  const visible = scrollPosition.scrollY > 0;

  const scrollUp = () => {
    scroller.scrollToTop({ duration: 300, smooth: true });
  };

  return (
    <Fade
      {...props}
      className={clsx('scroll-tracker', className)}
      show={visible}
      duration={200}
      durationOut={150}
    >
      <Button onClick={scrollUp}>^</Button>
    </Fade>
  );
};

export default ScrollTracker;
