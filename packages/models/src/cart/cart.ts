import { ResItem } from "./item";

export interface Cart {
    id?: string;
    userId?: string;
    items?:ResItem[];
}