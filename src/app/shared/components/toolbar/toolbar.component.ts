import { MatSidenav } from '@angular/material/sidenav';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  @Output() toggleSidenav = new EventEmitter<any>();;

  constructor() { }

  ngOnInit(): void {
  }

}
