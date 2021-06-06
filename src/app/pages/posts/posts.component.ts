import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from './../../shared/services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private commonService: CommonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.commonService.getPosts().subscribe((res: any) => {
      this.posts = res;
    }, (err) => {

    })
  }

  edit(item = {}) {
    let dialogRef = this.dialog.open(EditPostsComponent, {
      disableClose: true,
      width: '1100px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // Again get list if we have added or updated item
        this.getPosts();
      }
      dialogRef.close();
      dialogRef = null;
    });
  }

}
