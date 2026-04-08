import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { Card } from '../../interfaces/card.interface';

// icons
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
addIcons({
  'add-outline': addOutline,
});

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() card!: Card;

  ngOnInit() {
    if (!this.card || !this.card.type || !this.card.titulo || !this.card.urlImagem)
      console.warn('Card inválido:', this.card);
  }

  get isCreate(): boolean {
    return this.card?.type === 'create';
  }

  get isProgress(): boolean {
    return this.card?.type === 'progress';
  }
}