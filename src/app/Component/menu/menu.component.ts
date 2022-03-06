import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scroll();
  }

  scroll(): void {
    window.onscroll = () => {
      const scroll = window.scrollY;
      const navbar = document.getElementById('navbar');
      const logo = document.getElementById('logo');

      if(scroll >= 120) {
        navbar.classList.add('bg-dark');
        logo.setAttribute('src', 'assets/Images/LOGO_CENTRAL.png');
      }else if(scroll < 120) {
        navbar.classList.remove('bg-dark');
        logo.setAttribute('src', 'assets/Images/LOGO_EN_NEGRO.png')
      }
    }
  }

}
