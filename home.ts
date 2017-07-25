import { Component } from '@angular/core';
import { IonicPage  } from 'ionic-angular';
import { ViewChild, ElementRef, HostListener } from '@angular/core';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  fruits: string[];

  constructor() {
    this.fruits = ["apple", "banana", "kiwi"];
  }
}
