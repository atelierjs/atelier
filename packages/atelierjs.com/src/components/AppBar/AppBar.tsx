import React from 'react';
import { Header } from '@atelierjs/react';
import { useAppContext } from '../../context';

const AppBar: React.VFC = () => {
  const { toggleNav } = useAppContext();
  return <Header onMenuClick={toggleNav}>Header Stuff</Header>;
};

export default AppBar;
