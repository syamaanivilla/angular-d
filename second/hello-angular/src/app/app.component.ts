import { Component } from '@angular/core';
import { player } from 'player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-angular';
  player: player = {
    id: 101,
    name: 'syama',
    date: '23-05-2022',
    image:
      'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
  };
  currentitem = 'laptop';
}
