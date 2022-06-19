import clsx from 'clsx';
import React from 'react';
import { AtelierComponent } from '@components';

export type ListItemProps = {
  clickable?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

const ListItem: AtelierComponent<ListItemProps> = ({
  children,
  innerRef,
  className,
  clickable,
  onClick,
  ...props
}) => (
  <div
    {...props}
    ref={innerRef}
    className={clsx('list-item', className, {
      clickable: clickable || onClick,
    })}
    onClick={onClick}
  >
    {children}
  </div>
);

export default ListItem;
