import clsx from 'clsx';
import React from 'react';
import { AtelierComponent } from '@components';

type BaseButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = BaseButtonProps & {
  variant?: 'primary' | 'secondary';
};

const Button: AtelierComponent<ButtonProps, HTMLButtonElement> = ({
  children,
  innerRef,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      ref={innerRef}
      className={clsx('button', `button--${variant || 'primary'}`, className)}
    >
      {children}
    </button>
  );
};

export default Button;
