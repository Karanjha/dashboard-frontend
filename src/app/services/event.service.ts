import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable()
export class EventService {

  constructor(private http: HttpWrapperService) { }

  add(description: string, start: Date, end: Date) {
    return this.http.post('https://dashboard.pclub.in/api/timetable/add',
                          {
                            'name': description,
                            'start': start.toISOString(),
                            'end': end.toISOString()
                          }).toPromise();
  }
}
