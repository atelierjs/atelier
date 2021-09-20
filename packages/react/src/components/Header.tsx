import React from 'react';
import clsx from 'clsx';
import Container from './Container';
import { BaseComponentProps } from './BaseComponent';

export type HeaderProps = BaseComponentProps & {
  onMenuClick?: (e: React.MouseEvent) => void;
};

const Header: React.FC<HeaderProps> = ({
  children,
  innerRef,
  className,
  onMenuClick,
  ...props
}) => (
  <div {...props} ref={innerRef} className={clsx('header', className)}>
    <div className="header--menu" onClick={onMenuClick} />
    <Container>
      <div className="header--content">{children}</div>
    </Container>
  </div>
);

export default Header;
