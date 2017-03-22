import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

import { AutoService } from '../../services/auto.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-auto-post',
  templateUrl: './auto-post.component.html',
  styleUrls: ['./auto-post.component.css']
})
export class AutoPostComponent implements OnInit {

  locationTo: string;
  locationFrom: string;
  onDate: string;
  content: string;
  time: string;
  loading = false;

  constructor(private autoService: AutoService,
              public dialogRef: MdDialogRef<AutoPostComponent>) { }

  ngOnInit() {
  }

  clear() {
    this.locationTo = '';
    this.locationFrom = '';
    this.onDate = null;
    this.time = '';
  }

  postToFacebook() {
    this.loading = true;
    const p = {
      to: this.locationTo,
      frm: this.locationFrom,
      date: new Date(this.onDate.split('/').reverse().join('/')),
      time: this.time,
      content: this.content
    };
    this.autoService.postPost(p).then(post => this.dialogRef.close(post));
    console.log('Posted');
    this.loading = false;
    this.clear();
  }

}
