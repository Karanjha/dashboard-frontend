import { Component, Inject, Input, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Weather } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  public weather: Weather;

  constructor(private sanitizer: DomSanitizer,
              private weatherService: WeatherService) {}

  ngOnInit() {
    if (localStorage.getItem('weather')) {
      console.log(localStorage.getItem('weather'));
      this.weather = JSON.parse(localStorage.getItem('weather'));
      this.weather.main.temp = Math.round(this.weather.main.temp - 273);
    }
    this.weatherService.getWeather().then((w) => {
      this.weather = w;
      this.weather.main.temp = Math.round(this.weather.main.temp - 273);
      localStorage.setItem('weather', JSON.stringify(w));
    });
  }

  url = () => {
      return this.sanitizer.bypassSecurityTrustUrl(`http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`);
  }


}
