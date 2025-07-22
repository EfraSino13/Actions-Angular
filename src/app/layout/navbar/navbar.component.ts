import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MainRoutingModule } from '../../main/main-routing.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MainRoutingModule    
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
