import clsx from 'clsx';
import React from 'react';
import { Container } from '.';
import { BaseComponentProps } from './BaseComponent';

export type HeaderProps = BaseComponentProps & {};

const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => (
  <div {...props} className={clsx('header', className)}>
    <Container>{children}</Container>
  </div>
);

export default Header;
