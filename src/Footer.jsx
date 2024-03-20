import "./App.css"
import humidity_icon from "./assets/humidity.png"
import wind_icon from "./assets/wind.png"

function Footer(props){
    return(
        <>
        <div className="status-container">
            <div className="element">
                <img src={humidity_icon} classname="icon" alt="" />
                <div className="data">
                    <div className="humidity-percent">10%</div>
                    <div className="text">Humid</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} className="icon" alt="" />
                <div className="data">
                    <div className="wind-rate">10 Km/H</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;