import React, { useEffect, useState } from 'react';

export type FadeProps = {
  show: boolean;
  duration?: number;
  durationOut?: number;
};

const Fade: React.FC<FadeProps> = ({
  children,
  show,
  duration,
  durationOut,
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    show && setVisible(true);
  }, [show]);

  const onAnimationEnd = () => !show && setVisible(false);

  const fadeInTime = `${duration || 250}ms`;
  const fadeOutTime = `${durationOut || duration || 250}ms`;

  const style: React.CSSProperties = {
    animation: show ? `fadeIn ${fadeInTime}` : `fadeOut ${fadeOutTime}`,
  };

  return visible ? (
    <div style={style} onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  ) : null;
};

export default Fade;
