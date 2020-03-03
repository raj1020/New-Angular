import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template: `<div>

    <h2>{{"Hello " + namename}}</h2>
    <button (click) = "fireEvent()">Send Event</button>

    <h2>{{namename | lowercase}}</h2>
    <h2>{{namename | uppercase}}</h2>
    <h2>{{namename | titlecase}}</h2>
    <h2>{{namename | slice: 3:7}}</h2>
    <h2>{{titleStyles | json}}</h2>
    <h2>{{5.678 | number: '1.2-3'}}</h2>
    <h2>{{5.678 | number: '3.4-5'}}</h2>
    <h2>{{5.678 | number: '3.1-2'}}</h2>
    <h2>{{0.25 |currency: 'INR ': 'code'}}</h2>
    <h2>{{date | date: 'longDate'}}</h2>
    <h2>{{date | date: 'longTime'}}</h2>


    <ul *ngFor = "let color of colors; index as i">
        <li>{{i + 1}} {{color}}</li>
    
    </ul>

    <ul *ngFor = "let color of colors; odd as o">
        <li>{{o}} {{color}}</li>
    
    </ul>



    <div [ngSwitch]= "color">
      <div *ngSwitchCase = "'red'">You picked red colour</div> 
      <div *ngSwitchCase = "'blue'">You picked blue colour</div> 
      <div *ngSwitchCase = "'green'">You picked green colour</div> 
      <div *ngSwitchDefault>Pick again. </div> 


    </div>

    <div *ngIf="displayName; then thenBlock; else elseBlock"> </div>
      <ng-template #thenBlock>
      
        <h2>
          Display the name
        </h2>

      </ng-template>

      <ng-template #elseBlock>
    
      <h2>
        Name is hidden
      </h2>

    </ng-template>
    
    

    


    <input [(ngModel)] = "naam" type = "text">
    {{naam}}
    <h2 class = "text-success">Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2 [class] = "dangerClass">{{"Welcome" + name}}</h2>
    <h2 [class.text-danger] = "hasError">The length of the name is {{name.length}}</h2>
    <h2 [ngClass]="messageClasses" >Your name in UpperCase {{name.toUpperCase()}}</h2>
    <h2 [style.color] = "hasError ? 'purple' : 'orange'" >{{greetUser()}}</h2>
    <h2 [style.color] = "highlightColor" >The url of this webpage is "{{siteUrl}}"</h2>
    <input [id]= "myId" type= "text" value= "Paul">
    <div [ngStyle] = "titleStyles" ><p>Sing a sweet song.</p></div>
    
    <input [disabled] = "isDisabled" id= "{{myId}} type= "text value= "Paul">
    <div><p></p></div>
    <button (click) = "onClick()">Greet on a Click</button>
    
    <div><p></p></div>
    {{greeting}}
    <div><p></p></div>
    <button (click) = "greeting = 'Welcome My Friend'">Greet on a Click</button>

    

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


  @Output() public childEvent = new EventEmitter();
  @Input('parentData') public namename;

  public date = new Date();

  public colors = ["red", "blue", "green", "yellow"];
  public color = "violet";
  displayName = false;
  public naam: string = "";

  public name = "Michael";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  public dangerClass = "text-danger";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public titleStyles = {
    color: "violet",
    fontStyle: "italic", 
    fontWeight: "bold"
    
  }

  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial 
  }

  public greeting = "";

  
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "GdDay " + this.name;
  }

  onClick() {
    console.log("Congrats on starting Angular lesson");
    this.greeting = 'Congrats on starting Angular lesson';
  }

  fireEvent() {
    this.childEvent.emit('Hey SuperStar');
  }


}
