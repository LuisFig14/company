import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.initializeCarousel();
  }

  async initializeCarousel(){

    const flowbite = await import('flowbite');

    const carouselElement = document.getElementById('default-carousel');
    if (carouselElement) {
      flowbite.initCarousels();
    }

  }

}
