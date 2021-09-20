import clsx from 'clsx';
import React from 'react';
import { BaseComponentProps } from './BaseComponent';

export type ContainerProps = BaseComponentProps & {};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={clsx('container', className)}>
      {children}
    </div>
  );
};

export default Container;
