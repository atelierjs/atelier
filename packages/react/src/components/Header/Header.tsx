import React from 'react';
import { HeaderProps } from 'root/types';

const Header = (props: HeaderProps) => {
  return <div className="header">{props.title}</div>;
};

export default Header;
