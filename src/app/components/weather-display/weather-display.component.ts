import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/cities.json'
import axios from 'axios';
import { environment } from 'src/environments/environment';

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
      let apiURL = this.apiBase + 'id=' + cityid + '&appid='+ this.apiKey;
      axios.get(apiURL)
      .then(res => {
        this.weatherDetails.push(res.data);
      })
    });
    if(localStorage.get)
    console.log(this.weatherDetails);
  }

}
