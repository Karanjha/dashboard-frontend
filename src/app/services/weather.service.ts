import { Injectable } from '@angular/core';

import { HttpWrapperService } from './http-wrapper.service';
import { Weather } from '../models/weather.model';

@Injectable()
export class WeatherService {

  constructor(private http: HttpWrapperService) {}

  getWeather() {
    return this.http.get('https://dashboard.pclub.in/api/weather/')
      .map(res => res.json() as Weather)
      .toPromise();
  }

}
