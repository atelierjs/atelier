import clsx from 'clsx';
import React from 'react';
import { BaseComponentProps } from './BaseComponent';

export type ListItemProps = BaseComponentProps & {
  onClick?: (e: React.MouseEvent) => void;
};

const ListItem: React.FC<ListItemProps> = ({
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
