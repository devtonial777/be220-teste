export type CardType = 'create' | 'progress' | 'content';

export interface Card {
  type: CardType;
  titulo: string;
  subtitulo?: string;
  urlImagem: string;
}