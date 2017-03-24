import { Component, Input, OnInit } from '@angular/core';

import { AutoService } from '../../services/auto.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  private originalPosts: Array<Post>;
  loaded = false;
  posts: Array<Post>;
  locations =
  ['CNB', 'Campus', 'Fazalganj', 'Lucknow', 'Anywhere'];
  locationTo = 'Anywhere';
  locationFrom = 'Anywhere';
  content = '';
  onDate = '';
  constructor(private autoService: AutoService) { }

  ngOnInit() {
    // Try to read localStorage
    let localStorageData = localStorage.getItem('sharecache');
    if (localStorageData && JSON.parse(localStorageData))
      this.posts = JSON.parse(localStorageData);
    else
      this.posts = [];
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, 10000);
  }

  private loadPostsFromServer() {
    this.autoService.getPosts().then(p => {
      this.loaded = true;
      this.originalPosts = p;
      this.posts = p;
      localStorage.setItem('sharecache', JSON.stringify(this.posts));
    });
  }

  filterPosts() {
    this.posts = this.originalPosts.filter(elem => true);
    if (this.locationTo !== 'Anywhere') {
      this.posts = this.posts
        .filter(elem => elem.to === this.locationTo || elem.frm === '?');
    }
    if (this.locationFrom !== 'Anywhere') {
      this.posts = this.posts
        .filter(elem => elem.frm === this.locationFrom || elem.frm === '?');
    }
    if (this.onDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
      this.posts = this.posts
        .filter(elem => {
          if (!elem.date) return true;
          // We need to do this because JS expects MM DD YYY
          // We give it YYYY MM DD, which also works
          let expectedPostingDate = new Date(this.onDate.split('/').reverse().join('/'));
          return expectedPostingDate.getFullYear() === elem.date.getFullYear() &&
                 expectedPostingDate.getMonth() === elem.date.getMonth() &&
                 expectedPostingDate.getDate() === elem.date.getDate();
        });
    }
    if (this.content.length >= 3) {
      this.posts = this.posts
        .filter(elem => elem
                            .content
                            .toLowerCase()
                            .indexOf(this.content.toLowerCase()) !== -1);
    }
  }
}
