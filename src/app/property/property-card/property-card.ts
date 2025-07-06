import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.html',
  styleUrl: './property-card.css'
})
export class PropertyCard {
  Property:any ={
    "Id":1,
    "Name": "Villa House",
    "Type":"House",
    "Price":20000,
  }
}
