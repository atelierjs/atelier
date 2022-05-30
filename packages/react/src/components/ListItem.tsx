import clsx from 'clsx';
import React from 'react';
import { AtelierComponent } from './AtelierComponent';

export type ListItemProps = {
  onClick?: (e: React.MouseEvent) => void;
};

const ListItem: AtelierComponent<ListItemProps> = ({
  children,
  innerRef,
  className,
  onClick,
  ...props
}) => {
  return (
    <div
      {...props}
      ref={innerRef}
      className={clsx('list-item', className, { clickable: !!onClick })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ListItem;
