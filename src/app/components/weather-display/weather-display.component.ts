import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/cities.json'
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { setupCache } from 'axios-cache-adapter'

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  weatherDetails: any[] = [];
  apiBase: string;
  apiKey:string;

  constructor(

  ) {
    this.apiBase=environment.baseUrl;
    this.apiKey=environment.apiKey;
   }

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  getWeatherDetails(){
    data.List.forEach(element => {
      let cityid=element.CityCode;
      const cache = setupCache({
        // cache max age 15min
        maxAge: 15 * 60 * 1000
      });
      const api = axios.create({
        adapter: cache.adapter
      })
      api({
        url: this.apiBase + 'id=' + cityid + '&appid='+ this.apiKey,
        method: 'get'
      }).then(async (res) => {
        this.weatherDetails.push(res.data);
      })
    });
  }

}
