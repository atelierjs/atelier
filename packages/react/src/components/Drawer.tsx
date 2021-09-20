import clsx from 'clsx';
import React from 'react';
import { BaseComponentProps } from './BaseComponent';

export type DrawerProps = BaseComponentProps & {
  open: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = ({
  children,
  innerRef,
  className,
  open,
  ...props
}) => (
  <div
    {...props}
    ref={innerRef}
    className={clsx('drawer', className, { open })}
  >
    {children}
  </div>
);

export default Drawer;
