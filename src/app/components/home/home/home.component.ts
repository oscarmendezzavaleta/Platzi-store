import { Component, OnInit , AfterViewInit } from '@angular/core';

import Swiper from 'swiper';
import { SpawnSyncOptionsWithBufferEncoding } from 'child_process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit {


  mySwipper: Swiper;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.mySwipper = new Swiper('.swiper-container' , {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        }
    });
  }

}
