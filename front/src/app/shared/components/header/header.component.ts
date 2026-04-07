import { Component, OnInit } from '@angular/core';
import { IonIcon, IonHeader } from '@ionic/angular/standalone';

// ionic icons
import { addIcons } from 'ionicons';
import { menuOutline, addCircleOutline, trophyOutline, notificationsOutline  } from 'ionicons/icons';

addIcons({
  'menu-outline': menuOutline,
  'add-circle-outline': addCircleOutline,
  'trophy-outline': trophyOutline,
  'notifications-outline': notificationsOutline,
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonIcon
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
