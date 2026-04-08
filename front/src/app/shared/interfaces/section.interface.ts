import { Card } from './card.interface';

export interface Section {
  titulo: string;
  disabled?: boolean;
  type?: 'create' | 'progress';
  cards: Card[];
}