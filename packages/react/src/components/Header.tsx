import React from 'react';
import clsx from 'clsx';
import { AtelierComponent, Container } from '@components';

export type HeaderProps = {
  onMenuClick?: (e: React.MouseEvent) => void;
};

const Header: AtelierComponent<HeaderProps> = ({
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
