import clsx from 'clsx';
import React, { useLayoutEffect } from 'react';
import Portal from './Portal';
import { BaseComponentProps } from './BaseComponent';
import Fade from './Fade';

export type DrawerProps = BaseComponentProps & {
  open: boolean;
  onClose: () => void;
  mask?: boolean;
};

const Drawer: React.FC<DrawerProps> = ({
  children,
  innerRef,
  className,
  open,
  mask,
  ...props
}) => {
  useLayoutEffect(() => {
    const html = document.documentElement;
    open ? html.classList.add('no-scroll') : html.classList.remove('no-scroll');

    return () => {
      html.classList.remove('no-scroll');
    };
  }, [open]);

  return (
    <Portal elementId="atelier-drawer--root">
      {mask && (
        <Fade show={open} duration={250} durationOut={200}>
          <div className="drawer--mask" />
        </Fade>
      )}
      <div
        {...props}
        ref={innerRef}
        className={clsx('drawer', className, { open })}
      >
        {children}
      </div>
    </Portal>
  );
};

export default Drawer;
