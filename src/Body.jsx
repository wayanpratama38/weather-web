import './App.css'

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