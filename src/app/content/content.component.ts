import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  cards = [
    {
      title: 'Card 1',
    },
    {
      title: 'Card 2',
    },
    {
      title: 'Card 3',
    },
    {
      title: 'Card 4',
    },
  ];
}
