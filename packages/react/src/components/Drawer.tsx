import clsx from 'clsx';
import React, { useLayoutEffect } from 'react';
import { AtelierComponent, Fade, Portal } from '@components';

export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  mask?: boolean;
};

const Drawer: AtelierComponent<DrawerProps> = ({
  children,
  innerRef,
  className,
  open,
  mask,
  ...props
}) => {
  useLayoutEffect(() => {
    const htmlClasses = document.documentElement.classList;
    open ? htmlClasses.add('no-scroll') : htmlClasses.remove('no-scroll');

    return () => {
      htmlClasses.remove('no-scroll');
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
