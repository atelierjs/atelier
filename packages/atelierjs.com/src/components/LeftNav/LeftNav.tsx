import React, { useRef } from 'react';
import { useAppContext } from '@context';
import { Drawer, ListItem } from '@atelierjs/react';
import { useOnClickOutside } from '@hooks';

import './LeftNav.scss';

const LeftNav: React.FC = () => {
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
      <ListItem onClick={() => {}}>Button</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem onClick={() => {}}>Button</ListItem>
      <ListItem onClick={() => {}}>Button</ListItem>
    </Drawer>
  );
};

export default LeftNav;
