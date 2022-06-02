import { AtelierComponent } from '@components';

const List: AtelierComponent = ({ children, innerRef, ...props }) => {
  return (
    <div {...props} ref={innerRef} className="list">
      {children}
    </div>
  );
};

export default List;
