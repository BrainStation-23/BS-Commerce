import { ResponseItem } from './item';

export interface Cart {
  id?: string;
  userId?: string;
  items?: ResponseItem[];
}
