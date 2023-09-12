import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input ()
  gameCover:string=""

  @Input()
  consoleTypeOne:string =""

  @Input()
  consoleTypeTwo:string =""

  @Input()
  gamePricing:string =""

  @Input() 
  externalLink: string = "";
  
  constructor() { }

  ngOnInit(): void {}

  redirectToExternalLink() {
    if (this.externalLink) {
      window.open(this.externalLink, '_blank');
    }
  }
}
