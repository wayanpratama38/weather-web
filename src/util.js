

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
    
    let change_icon = data.weather[0].icon
        if(change_icon==="01d" || change_icon==="01n"){
            setWicon(clear_icon)
        }else if(change_icon==="02d" || change_icon==="02n"){
            setWicon(cloud_icon)
        }else if(change_icon==="09d" || change_icon==="09n"){
            setWicon(drizzle_icon)
        }else if(change_icon==="10d" || change_icon==="10n"){
            setWicon(rain_icon)
        }else if(change_icon==="13d" || change_icon==="13n"){
            setWicon(snow_icon)
        }
    


}