import React, { useEffect, useState } from 'react';
import { AtelierComponent } from './AtelierComponent';

export type FadeProps = {
  show: boolean;
  duration?: number;
  durationOut?: number;
};

const Fade: AtelierComponent<FadeProps> = ({
  children,
  innerRef,
  show,
  duration,
  durationOut,
  ...props
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    show && setVisible(true);
  }, [show]);

  const onAnimationEnd = () => !show && setVisible(false);

  const fadeInTime = `${duration || 250}ms`;
  const fadeOutTime = `${durationOut || duration || 250}ms`;

  // animation-fill-mode "forwards" used as a hacky fix for React 18 animation flickering
  const animation = show
    ? `fadeIn ${fadeInTime} forwards`
    : `fadeOut ${fadeOutTime} forwards`;

  const style: React.CSSProperties = {
    animation,
  };

  return visible ? (
    <div
      {...props}
      ref={innerRef}
      style={style}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  ) : null;
};

export default Fade;
