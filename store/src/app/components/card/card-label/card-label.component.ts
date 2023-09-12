import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {

  @Input()
  consoleTypeOne:string =""

  @Input()
  consoleTypeTwo:string =""


  constructor() { }

  ngOnInit(): void {
  }

}
