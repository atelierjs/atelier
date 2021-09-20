import { useEffect } from 'react';
import clsx from 'clsx';
import { Container } from '@atelierjs/react';

import './Page.scss';

export type PageProps = {
  className?: string;
  title?: string;
};

const Page: React.FC<PageProps> = ({ children, className, title }) => {
  useEffect(() => {
    document.title = title || 'Atelier.js';
  }, [title]);

  return <Container className={clsx('page', className)}>{children}</Container>;
};

export default Page;
