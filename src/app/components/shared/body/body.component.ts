import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private wheatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
  private apiKey = '525fd52560ea238b30a6278c9225ecd0'
  private cityId = '1248991'
  WeatherData:any;

  constructor() {}

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    debugger;
    fetch(this.wheatherUrl+'id='+this.cityId+'&appid='+this.apiKey)
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
    //let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    //this.setWeatherData(data);
  }
  setWeatherData(data: any){
    this.WeatherData = data;
  }

}