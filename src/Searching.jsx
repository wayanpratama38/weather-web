import searchLogo from "./assets/search.svg"
import './App.css'
import { useState } from "react";
import clear_icon from "./assets/clear.png"
import cloud_icon from "./assets/cloud.png"
import drizzle_icon from "./assets/drizzle.png"
import rain_icon from "./assets/rain.png"
import snow_icon from "./assets/snow.png"
import Body from "./Body"



function Searching(){
    
    const API_KEY = "73f021a8262c3d559d57b043a121c417";
    const [wicon,setWicon] = useState(cloud_icon);

    const search = async () =>{
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
    
        temp[0].innerHTML = Math.round(data.main.temp)+" °C";
        location[0].innerHTML = data.name;
        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.round(data.wind.speed)+" Km/h";
        
        let change_icon = data.weather[0].icon;
        if(change_icon==="01d" || change_icon==="01n"){
            setWicon(clear_icon)
        }else if(change_icon==="02d" || change_icon==="02n"){
            setWicon(cloud_icon)
        }else if(change_icon==="03d" || change_icon==="03n"){
            setWicon(drizzle_icon)
        }else if(change_icon==="04d" || change_icon==="04n"){
            setWicon(drizzle_icon)
        }else if(change_icon==="9d" || change_icon==="9n"){
            setWicon(rain_icon)
        }else if(change_icon==="10d" || change_icon==="10n"){
            setWicon(rain_icon)
        }else if(change_icon==="13d" || change_icon==="13n"){
            setWicon(snow_icon)
        }else{
            setWicon(clear_icon)
        }
    }

    return(
        <>
        <div className="searchingBar">
            <input type="text" placeholder="Search" className="inputBar" />
            <div className = "searchButton" onClick={()=>{search()}} >
                <img src={searchLogo} alt="" />
            </div>
        </div>
        <Body icon={wicon} />
        </>
    )
}

export default Searching;