import { useEffect } from 'react';
import clsx from 'clsx';
import { Container } from '@atelierjs/react';
import { FCWithChildren } from '../../utils';

import './Page.scss';

export type PageProps = {
  className?: string;
  title?: string;
};

const Page: FCWithChildren<PageProps> = ({ children, className, title }) => {
  useEffect(() => {
    document.title = title || 'Atelier.js';
  }, [title]);

  return <Container className={clsx('page', className)}>{children}</Container>;
};

export default Page;
