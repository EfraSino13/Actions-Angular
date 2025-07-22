import { Component, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent implements OnInit {

  toggleSidebar = false;

  constructor() { }

  ngOnInit() {
  }

}
