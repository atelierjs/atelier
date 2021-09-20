import React from 'react';
import clsx from 'clsx';
import Container from './Container';
import { BaseComponentProps } from './BaseComponent';

export type HeaderProps = BaseComponentProps & {};

const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => (
  <div {...props} className={clsx('header', className)}>
    <Container>{children}</Container>
  </div>
);

export default Header;
