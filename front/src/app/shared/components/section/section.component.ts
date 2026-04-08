import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// componentes
import { CardComponent } from '../card/card.component';
import { ContentCardComponent } from 'src/app/shared/components/content-card/content-card.component';

// interfaces
import { Section } from '../../interfaces/section.interface';

// ionic icons
import { addIcons } from 'ionicons';
import { addOutline , } from 'ionicons/icons';
addIcons({
  'add-outline': addOutline,
});

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  imports: [ 
    IonicModule, 
    CommonModule,
    CardComponent,
    ContentCardComponent
  ],
})
export class SectionComponent  implements OnInit {

  @Input() section!: Section;

  ngOnInit() {
    if (!this.section || !this.section.titulo || !this.section.cards) {
      console.warn('Section inválida:', this.section);
    }
  }

  get showAddButton(): boolean {
    return this.section?.type === 'create';
  }
}
