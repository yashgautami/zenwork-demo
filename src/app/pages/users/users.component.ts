import { EditUsersComponent } from './edit-users/edit-users.component';
import { CommonService } from './../../shared/services/common.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private commonService: CommonService, public dialog: MatDialog) { }

  users = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.commonService.getUsers().subscribe((res: any) => {
      this.users = res;
    }, (err) => {

    })
  }

  edit(item = {}) {
    let dialogRef = this.dialog.open(EditUsersComponent, {
      disableClose: true,
      width: '1100px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // Again get list if we have added or updated item
        this.getUsers();
      }
      dialogRef.close();
      dialogRef = null;
    });
  }

}
