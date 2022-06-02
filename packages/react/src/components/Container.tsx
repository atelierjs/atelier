import React from 'react';
import clsx from 'clsx';
import { AtelierComponent } from '@components';

const Container: AtelierComponent = ({
  children,
  innerRef,
  className,
  ...props
}) => (
  <div {...props} ref={innerRef} className={clsx('container', className)}>
    {children}
  </div>
);

export default Container;
