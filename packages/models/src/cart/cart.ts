import { Item } from "./item";

export interface Cart {
    id?: string;
    userId?: string;
    items?:Item[];
}