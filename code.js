import { LightningElement } from 'lwc';

export default class ShowWeather extends LightningElement {
    show = false;
    city;
    temperature;
    description;
    icon;

    handleChange(event){
        this.city = event.target.value;
    }
    handleClick(){
        fetch(https://api.openweathermap.org/data/2.5/weather?q=${this.city}&apikey=a50ba90381d00a995888746b5d948a1b)
        .then(response => response.json())
        .then(data => {
            this.temperature = data.main.temp;
            this.description = data.weather[0].description;
            this.icon = data.weather[0].icon;
            this.show = true;
        })
        .catch(error => console.log(error))
    }
