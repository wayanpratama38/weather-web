import { useState } from "react";
import clear_icon from "./assets/clear.png"
import cloud_icon from "./assets/cloud.png"
import drizzle_icon from "./assets/drizzle.png"
import humidity_icon from "./assets/humidity.png"
import rain_icon from "./assets/rain.png"
import snow_icon from "./assets/snow.png"
import wind_icon from "./assets/wind.png"

const API_KEY = "73f021a8262c3d559d57b043a121c417"



export const search = async () =>{
    const element= document.getElementsByClassName("inputBar");
    if(element[0].value===""){
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`

    let response = await fetch(url);
    let data = await response.json();

    let temp = document.getElementsByClassName("weather-temp")
    let location = document.getElementsByClassName("weather-location")
    let humidity = document.getElementsByClassName("humidity-percent")
    let wind = document.getElementsByClassName("wind-rate")

    temp[0].innerHTML = data.main.temp
    location[0].innerHTML = data.name
    humidity[0].innerHTML = data.main.humidity
    wind[0].innerHTML = data.wind.speed
    
    


}