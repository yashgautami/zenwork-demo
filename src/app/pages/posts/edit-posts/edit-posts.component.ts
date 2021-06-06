import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.scss']
})
export class EditPostsComponent implements OnInit {
  isNew: boolean = true;
  public formGroup: FormGroup;
  loader: boolean = false;

  formValueLog: any;

  constructor(public dialogRef: MatDialogRef<EditPostsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.data);
    this.buildForm();
  }

  buildForm() {
    this.isNew = this.data.id ? false : true;
    let dataItem:any = this.data || {};
    this.formGroup = this.fb.group({
      id: [dataItem.id],
      title: [dataItem.title || '', [Validators.required]],
      body: [dataItem.body || '', [Validators.required]]
    })
  }

  close(needRefresh = false) {
    this.dialogRef.close(needRefresh);
  }

  save() {
    this.formValueLog = this.formGroup.value;
  }

}
