import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-intext',
  templateUrl: './intext.component.html',
  styleUrls: ['./intext.component.css']
})
export class IntextComponent implements OnInit {
  color = '';
  constructor(public dialogRef: MatDialogRef<IntextComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close(this.data);
  }

}
