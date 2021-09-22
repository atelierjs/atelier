import React from 'react';

export type ListProps = {};

const List: React.FC<ListProps> = ({ children }) => {
  return <div className="list">{children}</div>;
};

export default List;
