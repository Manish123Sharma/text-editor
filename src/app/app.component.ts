import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-editor';
  text:string;
  font_size:number;
  color:string;
  style:string;
bold="bold";
italic="italic";
  recievet(text:string){
    this.text=text;
    console.log(this.text);
  }
  recievef(font_size:number){
    this.font_size = font_size;
    console.log(this.font_size);
  }
  recievec(color:string){
    this.color = color;
    console.log(this.color);
  }
  recieves(style:string){
    this.style=style;
    console.log(this.style);
  }
}
