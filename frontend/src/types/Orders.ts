import { Client } from "./Clients";
import { Item } from "./Items";

export type Order = {
  _id: string;
  number: number;
  date: Date;
  status: string;
  client: Client;
  items: Item[];
  prix_total : number;
}