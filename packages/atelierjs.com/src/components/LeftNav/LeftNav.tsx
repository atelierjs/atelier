import React, { useRef } from 'react';
import { useAppContext } from '../../context';
import { Drawer } from '@atelierjs/react';
import { useOnClickOutside } from '../../utils';

import './LeftNav.scss';

export type LeftNavProps = {};

const LeftNav: React.FC<LeftNavProps> = ({ children }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const { navExpanded, closeNav } = useAppContext();

  useOnClickOutside(navRef, (e) => {
    if (!(e.target as Element).className.includes('header--menu')) {
      closeNav();
    }
  });

  return (
    <Drawer
      innerRef={navRef}
      className="left-nav"
      open={navExpanded}
      onClose={closeNav}
      mask
    >
      <div className="left-nav--upper">
        <div className="left-nav--menu" onClick={closeNav} />
      </div>
      {children}
    </Drawer>
  );
};

export default LeftNav;
