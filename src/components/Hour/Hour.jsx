import React from 'react';
import {BsFillCloudsFill,BsFillCloudLightningRainFill,BsCloudHaze2Fill,BsFillSunFill} from 'react-icons/bs'
import "./Hour.css"

function Hour({data}) {
    return ( 
        <div className="hourlyContainer">
            {data.list?.map((element) => (
                <div className="hour">
                <span>{element.weather[0].main}</span>
                {element.weather[0].main === "Clear" && <span><BsFillSunFill/></span>}
                {element.weather[0].main === "Clouds" && <span><BsFillCloudsFill/></span>}
                {element.weather[0].main === "Smoke" && <span><BsFillCloudsFill/></span>}
                {element.weather[0].main === "Rain" && <span><BsFillCloudLightningRainFill/></span>}
                {element.weather[0].main === "Haze" && <span><BsCloudHaze2Fill/></span>}
                {element.weather[0].main === "Mist" && <span><BsCloudHaze2Fill/></span>}
                <span>{element.main.temp}°C</span>
                <div className="dateandhour">
                    <span>{element.dt_txt}</span>
                </div>
            </div>
            ))}
        </div>
     );
}

export default Hour;
