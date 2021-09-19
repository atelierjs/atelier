import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from '../BaseComponent';

// import '@atelierjs/core/dist/scss/Card.scss';

export type CardProps = BaseComponentProps & {
  flat?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Card: React.FC<CardProps> = ({ children, className, flat, ...props }) => (
  <div {...props} className={clsx('card', className, { flat })}>
    {children}
  </div>
);

export default Card;
