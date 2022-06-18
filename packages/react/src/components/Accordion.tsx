import React from 'react';
import { AtelierComponent, Card } from '@components';
import clsx from 'clsx';

export type AccordionTitleProps = {
  // children?: React.ReactNode;
};

export const AccordionTitle: AtelierComponent<AccordionTitleProps> = ({
  children,
  className,
}) => <div className={clsx('accordion--title', className)}>{children}</div>;

export type AccordionContentProps = {};

export const AccordionContent: AtelierComponent<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => (
  <div {...props} className={clsx('accordion--content', className)}>
    {children}
  </div>
);

export type AccordionProps = {
  expanded?: boolean;
  onExpandedChange?: () => void;
};

const Accordion: AtelierComponent<AccordionProps> = ({
  children,
  className,
  expanded,
  onExpandedChange,
  ...props
}) => (
  <Card
    {...props}
    className={clsx('accordion', className, { expanded })}
    onClick={onExpandedChange}
    flat
  >
    {children}
  </Card>
);

export default Accordion;
