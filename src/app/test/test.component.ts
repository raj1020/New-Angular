import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template: `<div>
    <h2 class = "text-success">Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2 [class] = "dangerClass">{{"Welcome" + name}}</h2>
    <h2 [class.text-danger] = "hasError">The length of the name is {{name.length}}</h2>
    <h2>Your name in UpperCase {{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>The url of this webpage is "{{siteUrl}}"</h2>
    <input [id]= "myId" type= "text" value= "Paul">
    <div><p></p></div>
    <input [disabled] = "isDisabled" id= "{{myId}} type= "text value= "Paul">

  </div>`,
  styles: [`

    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  
  
  `]
})
export class TestComponent implements OnInit {

  public name = "Michael";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  public dangerClass = "text-danger";
  public hasError = true;

  
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "GdDay " + this.name;
  }

}
