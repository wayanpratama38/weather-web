import './App.css'
import clear_icon from "./assets/clear.png"
import cloud_icon from "./assets/cloud.png"
import drizzle_icon from "./assets/drizzle.png"
import rain_icon from "./assets/rain.png"
import snow_icon from "./assets/snow.png"
import { useState } from 'react' 
import Searching from './Searching'
import React from "react";




function Body(props){
    
    return(
        <>
        <div className="weather-icon" >
            <img src={props.icon} alt="" />
        </div>
        <div className="weather-temp">21 C</div>
        <div className="weather-location">London</div>
        </>
        )

}

export default Body;