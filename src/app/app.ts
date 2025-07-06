import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyList } from "./property/property-list/property-list";
import { PropertyCard } from "./property/property-card/property-card";
import { NavBar } from "./nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PropertyList, PropertyCard, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-renting-website';
}
