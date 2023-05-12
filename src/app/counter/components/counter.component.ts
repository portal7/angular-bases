// import {Component} from "@angular/core";

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Mundo</h1>'
// })
// export class CounterComponent {

// }

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
  <div style="border: 1px red; display:box; width:200px;">
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  </div>
  `,
})
export class CounterComponent implements OnInit {
  reset() {
    this.counter = 10;
  }
  increaseBy(amount: number): void {
    this.counter += amount;
  }
  counter: number = 10;
  ngOnInit() {}
}
