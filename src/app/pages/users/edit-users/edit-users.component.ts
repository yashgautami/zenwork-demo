import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  isNew: boolean = true;
  public formGroup: FormGroup;
  loader: boolean = false;

  formValueLog: any;

  constructor(public dialogRef: MatDialogRef<EditUsersComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.data);
    this.buildForm();
  }

  buildForm() {
    this.isNew = this.data.id ? false : true;
    let dataItem:any = this.data || {};
    this.formGroup = this.fb.group({
      id: [dataItem.id],
      name: [dataItem.name || '', [Validators.required]],
      email: [dataItem.email || '', [Validators.required, Validators.email]],
      phone: [dataItem.phone || '', [Validators.required]],
      website: [dataItem.website || '', [Validators.required]],
    })
  }

  close(needRefresh = false) {
    this.dialogRef.close(needRefresh);
  }

  save() {
    this.formValueLog = this.formGroup.value;
  }

}
