import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() recievet:EventEmitter<string> = new EventEmitter();
  @Output() recievef:EventEmitter<number>=new EventEmitter();
  @Output() recievec:EventEmitter<string>=new EventEmitter();
  @Output() recieves:EventEmitter<string>=new EventEmitter();
  constructor() { }
  text:string='';
  font_size:number=16;
  color:string = '';
  style:string = '';
  ngOnInit(): void {
  }
  send(text:string,angle:number){
    this.recievet.emit(text);
    this.recievef.emit(this.font_size);
    this.recievec.emit(this.color);
    this.recieves.emit(this.style);


  }

}
