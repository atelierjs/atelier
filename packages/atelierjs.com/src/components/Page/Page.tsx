import { useEffect } from 'react';
import clsx from 'clsx';

import './Page.scss';

export type PageProps = {
  className?: string;
  title?: string;
};

const Page: React.FC<PageProps> = ({ children, className, title }) => {
  useEffect(() => {
    document.title = title || 'Atelier.js';
  }, [title]);

  return <div className={clsx('page', className)}>{children}</div>;
};

export default Page;
