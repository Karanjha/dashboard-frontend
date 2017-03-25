import { Component, Inject, Input, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { SearchHelper } from '../../helpers/search.helper';
import { Student } from '../../models/student.model';

@Component({
  selector: 'search-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  public student: Student;
  @Input() public alternate: Student;

  constructor(private sanitizer: DomSanitizer,
              @Optional() @Inject(MD_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    if (this.data === null) {
      this.student = this.alternate;
    } else {
      this.student = this.data.student;
    }
  }

  url = () => {
    return this.sanitizer.bypassSecurityTrustStyle(SearchHelper.ImageURL(this.student.g, this.student.i, this.student.u));
  }
}
