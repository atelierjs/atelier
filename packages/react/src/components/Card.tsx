import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from './BaseComponent';

// import '@atelierjs/core/dist/css/components/Card.css';

export type CardProps = BaseComponentProps & {
  flat?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Card: React.FC<CardProps> = ({
  children,
  innerRef,
  className,
  flat,
  ...props
}) => (
  <div {...props} ref={innerRef} className={clsx('card', className, { flat })}>
    {children}
  </div>
);

export default Card;
