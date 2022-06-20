import React, { useRef } from 'react';
import { useAppContext } from '@context';
import { Drawer, ListItem } from '@atelierjs/react';
import { useOnClickOutside } from '@hooks';
import { Link } from 'gatsby';
import { FCWithChildren } from 'types';

import '@styles/components/left-nav.scss';

const LeftNav: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const { navExpanded, closeNav } = useAppContext();

  useOnClickOutside(navRef, (e) => {
    if (!(e.target as Element).className.includes('header--menu')) {
      closeNav();
    }
  });

  const ListItemLink: FCWithChildren<{ to: string }> = ({ children, to }) => (
    <Link to={to} onClick={closeNav}>
      <ListItem clickable>{children}</ListItem>
    </Link>
  );

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
      <div className="left-nav--lower">
        <ListItemLink to="/components/accordion">Accordion</ListItemLink>
        <ListItemLink to="/components/button">Button</ListItemLink>
        <ListItemLink to="/components/card">Card</ListItemLink>
        <ListItemLink to="/components/container">Container</ListItemLink>
        <ListItemLink to="/components/drawer">Drawer</ListItemLink>
        <ListItemLink to="/components/header">Header</ListItemLink>
        <ListItemLink to="/components/list">List</ListItemLink>
        <ListItemLink to="/components/scrolltracker">
          Scroll Tracker
        </ListItemLink>
      </div>
    </Drawer>
  );
};

export default LeftNav;
