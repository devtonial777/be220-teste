import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CardTreinoComponent } from 'src/app/shared/components/card-treino/card-treino.component';
import { SectionTitleComponent } from 'src/app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ 
    IonContent,
    HeaderComponent,
    CardTreinoComponent,
    SectionTitleComponent
  ],
})
export class HomePage {
  constructor() {}
}
