import { Component, AfterViewInit, OnInit, ElementRef } from '@angular/core';

const url = '/assets/widgets.js'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private elemref: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    this.elemref.nativeElement.appendChild(s);
}
}
