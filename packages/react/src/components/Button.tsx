import clsx from 'clsx';
import React from 'react';
import { AtelierComponent } from './AtelierComponent';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

const Button: AtelierComponent<ButtonProps, HTMLButtonElement> = ({
  children,
  innerRef,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      ref={innerRef}
      className={clsx('button', `button--${variant || 'primary'}`)}
    >
      {children}
    </button>
  );
};

export default Button;
