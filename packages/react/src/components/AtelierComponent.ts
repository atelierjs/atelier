import React from 'react';

export type AtelierComponentProps<R extends HTMLElement = HTMLDivElement> = {
  innerRef?: React.RefObject<R>;
  className?: string;
  style?: React.CSSProperties;
};

export type AtelierVoidComponent<
  P = {},
  R extends HTMLElement = HTMLDivElement
> = React.FC<AtelierComponentProps<R> & P>;

export type AtelierComponent<
  P = {},
  R extends HTMLElement = HTMLDivElement
> = AtelierVoidComponent<P & { children: React.ReactNode }, R>;
