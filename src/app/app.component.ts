import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedItem: Item[];

  query = "";

  items = [
    {
      position: 'CEO',
      name: 'Hadimaster'
    },
    {
      position: 'Director',
      name: 'Suryo'
    },
    {
      position: 'CTO',
      name: 'Suharto'
    }
  ];

  onSelect(item: Item[]) {
    this.selectedItem = item;
  }
}
