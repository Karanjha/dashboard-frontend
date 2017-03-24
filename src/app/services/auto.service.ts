import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Post } from '../models/post.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const apiUrl = 'https://dashboard.pclub.in/api/share/get';

@Injectable()
export class AutoService {

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get(apiUrl)
                    .map(res => {
                      const posts = [];
                      let data = res.json();
                          data.forEach(post => {
                            const p: Post = {
                              author: post.author,
                              content: post.content,
                              postId: post.post_id,
                              postingDate: new Date(post.posting_date)
                            };
                            if (post.date)
                              p.date = new Date(post.date);

                            if (post.frm)
                              p.frm = post.frm;
                            else
                              p.frm = '?';

                            if (post.to)
                              p.to = post.to;
                            else
                              p.to = '?';

                            if (post.time)
                              p.time = post.time;

                            posts.push(p);
                          });
                      return posts;
                    })
                   .toPromise();
  }
}
