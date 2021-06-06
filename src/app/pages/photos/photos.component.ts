import { EditPhotosComponent } from './edit-photos/edit-photos.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from './../../shared/services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos = [];

  constructor(private commonService: CommonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.commonService.getPhotos().subscribe((res: any) => {
      this.photos = res;
    }, (err) => {

    })
  }

  edit(item = {}) {
    let dialogRef = this.dialog.open(EditPhotosComponent, {
      disableClose: true,
      width: '1100px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // Again get list if we have added or updated item
        this.getPhotos();
      }
      dialogRef.close();
      dialogRef = null;
    });
  }

}
