import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from './BaseComponent';

export type ContainerProps = BaseComponentProps & {};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => (
  <div {...props} className={clsx('container', className)}>
    {children}
  </div>
);

export default Container;
