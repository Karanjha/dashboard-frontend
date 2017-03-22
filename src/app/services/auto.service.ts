import { Injectable } from '@angular/core';
// Future import { Headers, Http, Response } from '@angular/http';

import { Post } from '../models/post.model';

const data = [
  {
    "author": "Shashank Gupta",
    "content": "CNB to campus, 20th January, 5:30-6 am anyone? Train is 12313 Sealdah Rajdhani.",
    "date": "2017-01-19T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1391497154206734",
    "posting_date": "2017-03-18T10:47:18.000Z",
    "time": "05:30:00",
    "to": "Campus"
  },
  {
    "author": "त्रिशांक सिंह बघेल",
    "content": "Cnb to campus on 20th march at around 4:00 am.\nTrain- 12183 bhopal pratapgarh superfast express",
    "date": "2017-03-15T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1389267377763045",
    "posting_date": "2017-03-16T10:30:05.000Z",
    "time": "16:00:05",
    "to": "Campus"
  },
  {
    "author": "Mohit Garg",
    "content": "Anybody from CNB to Campus on 19thjan\nAround 8pm",
    "date": "2017-03-16T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1390039411019175",
    "posting_date": "2017-03-17T03:26:48.000Z",
    "time": "20:00:00",
    "to": "Campus"
  },
  {
    "author": "Bhargav Ganguly",
    "content": "CNB to campus anyone,on 20th march around 5 am.My train is Sealdah rajdhani(12313).7755047831",
    "date": "2017-03-16T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1390237700999346",
    "posting_date": "2017-03-17T07:17:52.000Z",
    "time": "01:23:13",
    "to": "Campus"
  },
  {
    "author": "Aman Singhal",
    "content": "CNB to campus\n20th march \n4:35 am\nTrain no.- 19039(awadh express)\nContact no.- 9454696160",
    "date": "2017-03-17T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1391473690875747",
    "posting_date": "2017-03-18T10:18:25.000Z",
    "time": "15:48:25",
    "to": "Campus"
  },
  {
    "author": "Saksham Sharma",
    "content": "Lucknow airport to Campus: 19th March,  flight lands at 7:30 PM. Cab share?",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "Lucknow",
    "post_id": "1390278054328644",
    "posting_date": "2017-03-17T08:03:44.000Z",
    "time": "19:30:00",
    "to": "Campus"
  },
  {
    "author": "Mohua Dutta",
    "content": "Anyone from​ Lko airport to campus on 19th March, 5.30 PM??",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "Lucknow",
    "post_id": "1391054470917669",
    "posting_date": "2017-03-18T00:36:59.000Z",
    "time": "06:06:59",
    "to": "Campus"
  },
  {
    "author": "Rahul Kumar",
    "content": "Anyone from CNB to Campus at 8:00 PM today(19th March)",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392298200793296",
    "posting_date": "2017-03-19T05:05:48.000Z",
    "time": "00:00:00",
    "to": "Campus"
  },
  {
    "author": "Shobhit Rastogi",
    "content": "Anybody for CNB to Campus at 9:30 pm today(19th March) ?",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392212374135212",
    "posting_date": "2017-03-19T02:56:35.000Z",
    "time": "00:00:00",
    "to": "Campus"
  },
  {
    "author": "Anutosh Nimesh",
    "content": "Anyone from CNB to campus on 19 March (Sunday)....\nMy train arrives around 7 pm",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1391204777569305",
    "posting_date": "2017-03-18T04:47:21.000Z",
    "time": "19:00:00",
    "to": "Campus"
  },
  {
    "author": "Rujuta Pradhan",
    "content": "Cnb to campus at 12:30pm 20march?",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392453327444450",
    "posting_date": "2017-03-19T08:18:14.000Z",
    "time": "12:30:00",
    "to": "Campus"
  },
  {
    "author": "Abhishek Jain",
    "content": "Anyone from CNB to Campus on 20th of March at around 4:30 am ? \nTrain is KOTA-PATNA",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1389966724359777",
    "posting_date": "2017-03-17T01:28:36.000Z",
    "time": "04:30:00",
    "to": "Campus"
  },
  {
    "author": "Abhishek Bansal",
    "content": "Anyone from CNB to Campus on 20th march around 1:30 am \nTrain - marudhar (14864)",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392128867476896",
    "posting_date": "2017-03-19T00:30:32.000Z",
    "time": "06:00:32",
    "to": "Campus"
  },
  {
    "author": "Abhishek Pandit",
    "content": "Cnb to campus\nTrain Hwh Ndls Poorva exp 12381\n12:30am 20th march\nPm me",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392435237446259",
    "posting_date": "2017-03-19T07:57:03.000Z",
    "time": "00:30:00",
    "to": "Campus"
  },
  {
    "author": "Rashmi Khoker",
    "content": "Anyone cnb to campus on 20th march .\nTrain kota patna\nArrival time-4:00 a.m\nContact no.-7054126630",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392065080816608",
    "posting_date": "2017-03-18T22:50:00.000Z",
    "time": "04:00:00",
    "to": "Campus"
  },
  {
    "author": "Sachin Angural",
    "content": "Anyone from LKO railway station to Kanpur on 19th March at 5:45pm or later... Can come to airport around 6:30pm.",
    "date": "2017-03-18T18:30:00.000Z",
    "frm": "Lucknow",
    "post_id": "1392250514131398",
    "posting_date": "2017-03-19T03:56:20.000Z",
    "time": "18:30:00",
    "to": "Campus"
  },
  {
    "author": "Deepak Panchal",
    "content": "CNB to campus around 4AM on 20th March.\nTrain-bhopal pratapgarh\nContact no.-7054117893",
    "date": "2017-03-19T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1391381214218328",
    "posting_date": "2017-03-18T08:34:11.000Z",
    "time": "04:00:00",
    "to": "Campus"
  },
  {
    "author": "Ananya Rana",
    "content": "Anybody travelling in 14164,Sangam?\nIt'll be reaching at around 4am,20th March.\nCall me maybe-7755057633",
    "date": "2017-03-19T18:30:00.000Z",
    "frm": "",
    "post_id": "1392396287450154",
    "posting_date": "2017-03-19T07:07:18.000Z",
    "time": "04:00:00",
    "to": ""
  },
  {
    "author": "Azad Soni",
    "content": "Anyone from CNB to Campus On 20th March around 3:30 am\nTrain - Gorkhdham exp(scheduled arrival 3:10 am)\nMob. No. 7388870664",
    "date": "2017-03-19T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392474204109029",
    "posting_date": "2017-03-19T08:38:35.000Z",
    "time": "03:30:00",
    "to": "Campus"
  },
  {
    "author": "Atul Gupta",
    "content": "Anyone from CNB to Campus tomorrow 6:30 am. \nTrain: Shramshakti Express",
    "date": "2017-03-19T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392180257471757",
    "posting_date": "2017-03-19T01:59:19.000Z",
    "time": "06:30:00",
    "to": "Campus"
  },
  {
    "author": "Swastid Sharma",
    "content": "CNB to campus on monday 20th\n6.15-6.30 a.m \ntrain-pushpak 12534\nanyone?",
    "date": "2017-03-19T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1391505267539256",
    "posting_date": "2017-03-18T10:54:45.000Z",
    "time": "00:00:00",
    "to": "Campus"
  },
  {
    "author": "Gaurav Khare",
    "content": "CNB to Campus on 20th March around 8 am.\n\nTrain : Chitrakut Exp (15206)\nschedule arrival : 8:05 am",
    "date": "2017-03-19T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1391084260914690",
    "posting_date": "2017-03-18T01:23:36.000Z",
    "time": "08:00:00",
    "to": "Campus"
  },
  {
    "author": "Shreyansh Mridul",
    "content": "Anyone from CNB to campus on 20th March around 2:30-3:00 am, Avadh Express (19040) \n8005429082",
    "date": "2017-03-19T18:30:00.000Z",
    "frm": "CNB",
    "post_id": "1392409420782174",
    "posting_date": "2017-03-19T07:22:58.000Z",
    "time": "02:30:00",
    "to": "Campus"
  },
  {
    "author": "Abhinav Ranjan",
    "content": "CNB to campus 11:45 pm tonight 19th March \nTrain: Rewa Anvt express",
    "date": null,
    "frm": null,
    "post_id": "1392113414145108",
    "posting_date": "2017-03-19T00:02:35.000Z",
    "time": null,
    "to": null
  },
  {
    "author": "Divya Udaiyappan",
    "content": "CNB to campus 20th march around 2 p.m.",
    "date": null,
    "frm": null,
    "post_id": "1392101220812994",
    "posting_date": "2017-03-18T23:42:17.000Z",
    "time": null,
    "to": null
  }
];

@Injectable()
export class AutoService {

  constructor() { }

  postPost(post: {
    content?: string,
    to: string,
    frm: string,
    time: string,
    date: Date}): Promise<Post> {
      // do stuff with the post, post it to facebook.
      // use nodeJS API
      return Promise.resolve({
        content: post.content || '',
        to: post.to,
        frm: post.frm,
        date: post.date,
        time: post.time,
        author: 'Dummy Author',
        postId: '23434132123',
        postingDate: new Date()
      });
  }

  getPosts(): Promise<Array<Post>> {
    const posts = [];
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
    return Promise.resolve(posts);
  }
}
