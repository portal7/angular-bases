import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './app-heroes-list.component.html',
  styleUrls: ['./app-heroes-list.component.css']
})
export class ListComponent {

  public deletedHero?: string;

  public heroNames: string[] =[
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
    'HawkEye',
  ]

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
