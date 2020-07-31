import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public innerWidth = window.innerWidth;
  navDisplay = true;
  navMenu = false;
  hamburger = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = event.target.innerWidth;
    this.hamburger = this.innerWidth < 992;
    if (this.hamburger) {
      this.navDisplay = false;
    }
    if (this.innerWidth > 991) {
      this.navMenu = false;
    }
  }

  ngOnInit(): void {
    this.navDisplay = false;

    if (this.innerWidth <= 991) {
      this.hamburger = true;
    }
  }

  toggleNav(): void {
    console.log('click ok', this.navMenu);
    this.navMenu = ! this.navMenu;
  }
}
