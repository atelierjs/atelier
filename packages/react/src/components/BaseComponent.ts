import { RefObject } from 'react';

export type BaseComponentProps<T extends HTMLElement = HTMLDivElement> = {
  innerRef?: RefObject<T>;
  className?: string;
  style?: React.CSSProperties;
};
