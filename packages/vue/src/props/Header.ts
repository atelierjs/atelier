import { HeaderProps } from 'root/types';

export default class implements HeaderProps {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
