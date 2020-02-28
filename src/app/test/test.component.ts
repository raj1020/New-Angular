import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
    <h2>Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome" + name}}</h2>
    <h2>The length of the name is {{name.length}}</h2>
    <h2>Your name in UpperCase {{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>The url of this webpage is "{{siteUrl}}"</h2>
    <input [id]= "myId" type= "text" value= "Paul">
    <div><p></p></div>
    <input [disabled] = "isDisabled" id= "{{myId}} type= "text value= "Paul">

  </div>`,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = "Michael";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "GdDay " + this.name;
  }

}
