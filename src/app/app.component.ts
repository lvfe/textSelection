import { Component } from '@angular/core';
import { CmoService } from './cmo.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IntextComponent } from './intext/intext.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmofront';
  content = '';
  constructor(private service: CmoService, public dialog: MatDialog) {

  }
  readtext() {
    this.service.get('txt').subscribe(res => {
      this.content = '';
      for (const line of res.split(/[\r\n]+/)) {
        console.log(line);
        this.content += '<p >' + line + '</p>'
      }
    });
  }
  readhtml() {
    this.service.get('html').subscribe(res => {

      this.content = res;
      // this.content = '<p>'+res+'</p>';
    });
  }
  public selector;
  mouse(e) {
    if (window.getSelection) {
      this.selector = window.getSelection().toString();
    } else {
      this.selector = document.getSelection();
    }
    this.selector = document.getSelection();
    var selectStr = this.selector.toString();

    // if (selectStr.trim() != "") {
    //   this.openDialog(selectStr);
    // }
    if(selectStr.trim()!=""){
      var rang = this.selector.getRangeAt(0);
      var temp = document.createElement('b');
      rang.surroundContents(temp);
      rang.deleteContents();
      rang.insertNode(document.createTextNode('text'));
    }
  }

}
