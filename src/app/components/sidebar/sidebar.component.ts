import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sideNavs:any;
  socialHandles:any;
  constructor() { }

  ngOnInit(): void {
    this.initializeSidebar()
  }
  initializeSidebar(): void {
    this.sideNavs = [
      {
        title: 'Home',
        icon: 'fa-solid fa-house',
        link: '/home'
      },
      {
        title: 'About',
        icon: 'info',
        link: '/about'
      },
      {
        title: 'Projects',
        icon: 'fa-brands fa-github',
        link: '/projects'
      },
      {
        title: 'Contact',
        icon: 'fa-brands fa-instagram',
        link: '/contact'
      }
    ];
  }

}
