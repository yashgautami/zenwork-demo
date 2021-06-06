import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user = {
    name: 'Yash Gautami',
    designation: 'Software Developer',
    thumb: 'https://media-exp1.licdn.com/dms/image/C4E03AQEABqKC2J8rSQ/profile-displayphoto-shrink_800_800/0/1609310708196?e=1628121600&v=beta&t=jFdaUOph4hERtwHp_rbDDXDzkHntUSpug-X6nVPOqLY'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
