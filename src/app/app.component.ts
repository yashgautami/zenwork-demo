import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  public sidenav!: MatSidenav;

  constructor() {
    window.addEventListener('resize', (e) => {
      this.manageSidebar()
    });
  }

  ngOnInit() {
  }

  manageSidebar() {
    if(window.innerWidth > 800) {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    } else {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    }
  }

  ngAfterViewInit() {
    this.manageSidebar();
  }

}
