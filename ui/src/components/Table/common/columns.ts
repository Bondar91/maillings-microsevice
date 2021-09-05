import { IColumns } from '../types';

export const columns: Record<string, IColumns[]> = {
  subscribers: [
    { id: 'id', title: 'Id' },
    { id: 'name', title: 'Imię i nazwisko' },
  ],
  subscriberLists: [
    { id: 'id', title: 'Id' },
    { id: 'name', title: 'Nazwa listy' },
    { id: 'subscribers', title: 'Subskrybenci' },
  ],
  templates: [
    { id: 'id', title: 'Id' },
    { id: 'name', title: 'Nazwa szablonu' },
  ],
  maillings: [
    { id: 'id', title: 'Id' },
    { id: 'name', title: 'Nazwa maillingu' },
  ],
};
