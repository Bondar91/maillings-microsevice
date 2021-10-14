import { title } from 'process';
import { IColumns } from '../types';

export const columns: Record<string, IColumns[]> = {
  subscribers: [
    { id: '_id', title: 'Id' },
    { id: 'name', title: 'Imię i nazwisko' },
    { id: 'email', title: 'Email' },
    { id: 'action', title: 'Akcje' },
  ],
  subscriberLists: [
    { id: 'id', title: 'Id' },
    { id: 'name', title: 'Nazwa listy' },
    { id: 'subscribers', title: 'Subskrybenci' },
    { id: 'action', title: 'Akcje' },
  ],
  templates: [
    { id: '_id', title: 'Id' },
    { id: 'title', title: 'Nazwa szablonu' },
    { id: 'description', title: 'Opis' },
    { id: 'body', title: 'Ciało' },
    { id: 'action', title: 'Akcje' },
  ],
  maillings: [
    { id: '_id', title: 'Id' },
    { id: 'title', title: 'Nazwa maillingu' },
    { id: 'sendCycle', title: 'Czas wysyłki' },
    { id: 'templateId', title: 'Szablon' },
    { id: 'subscriberListsIds', title: 'Lista subskrybentów' },
    { id: 'action', title: 'Akcje' },
  ],
};
