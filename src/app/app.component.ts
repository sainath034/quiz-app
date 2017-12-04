import { Component } from '@angular/core';

import {Quizdto} from './quizdto'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  options = ['Option 1','Option 2','Option 3','Option 4'];

  public model: Array<Quizdto> = new Array<Quizdto>(
    new Quizdto(1,'Question 1',this.options[0]),
    new Quizdto(1,'Question 2',this.options[1]),
    new Quizdto(1,'Question 3',this.options[2]))

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  
  get formstatus() { return JSON.stringify(this.model);}
}
