import clsx from 'clsx';
import React from 'react';
import { AtelierComponent } from './AtelierComponent';

export type ListItemProps = {
  onClick?: (e: React.MouseEvent) => void;
};

const ListItem: AtelierComponent<ListItemProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={clsx('list-item', className, { clickable: !!onClick })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ListItem;
