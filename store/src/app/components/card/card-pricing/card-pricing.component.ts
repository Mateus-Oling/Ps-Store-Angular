import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  gamePricing:string ="R$ 169,40"

  constructor() { }

  ngOnInit(): void {
  }

}
