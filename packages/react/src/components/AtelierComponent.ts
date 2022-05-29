import React from 'react';

export type AtelierComponentProps<R extends HTMLElement = HTMLDivElement> = {
  innerRef?: React.RefObject<R>;
  className?: string;
  style?: React.CSSProperties;
};

export type AtelierVoidComponent<
  T = {},
  R extends HTMLElement = HTMLDivElement
> = React.FC<AtelierComponentProps<R> & T>;

export type AtelierComponent<
  T = {},
  R extends HTMLElement = HTMLDivElement
> = AtelierVoidComponent<T & { children: React.ReactNode }, R>;
