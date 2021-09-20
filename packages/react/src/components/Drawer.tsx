import clsx from 'clsx';
import React from 'react';
import Portal from './Portal';
import { BaseComponentProps } from './BaseComponent';

export type DrawerProps = BaseComponentProps & {
  open: boolean;
  onClose: () => void;
  mask?: boolean;
};

const Drawer: React.FC<DrawerProps> = ({
  children,
  innerRef,
  className,
  mask,
  open,
  ...props
}) => (
  <Portal elementId="atelier-drawer">
    {mask && <div className={clsx('drawer--mask', { open })} />}
    <div
      {...props}
      ref={innerRef}
      className={clsx('drawer', className, { open })}
    >
      {children}
    </div>
  </Portal>
);

export default Drawer;
