import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// Componentes
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SectionComponent } from 'src/app/shared/components/section/section.component';

// interfaces
import { Section } from '../shared/interfaces/section.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ 
    IonContent,
    HeaderComponent,
    SectionComponent
  ],
})
export class HomePage {
  public cardData: Section[] = [
    // card de cadastro
    {
      titulo: 'PERSONAL ONLINE',
      type: 'create',
      cards: [
        {
          type: 'create',
          titulo: 'NOVO TREINO',
          urlImagem: 'assets/img-treino/img-treino.webp'
        },
        {
          type: 'progress',
          titulo: 'YOGA EXPRESS',
          subtitulo: 'continuar treinando',
          urlImagem: 'assets/img-treino/img-treino.webp'
        }
      ]
    },
    // programas (possívelmente já cadastrados)
    {
      titulo: 'PROGRAMAS',
      type: 'progress',
      cards: [
        {
          type: 'progress',
          titulo: 'LEVANTAMENTO DE PESO',
          subtitulo: 'continuar treinando',
          urlImagem: 'assets/img-treino/img-treino.webp'
        }
      ]
    },
    // disable cards
    {
      titulo: 'CONTEÚDOS',
      disabled: true,
      cards: [
        { type: 'content', titulo: '', urlImagem: '' },
        { type: 'content', titulo: '', urlImagem: '' }
      ]
    }
  ];

  public cardTeste = [];

  constructor() {}
}
