import React from 'react';
import './CurrentWeather.css';
import { useSelector } from 'react-redux';

function Current() {
    const data= useSelector((state) => state.weather)
    const accurateTemp = Math.round(data.temp)
    
    return ( 
        <div className="MainContainer">
            <span>{data.city}</span>
            <div className="container">
                <div className="temperature">
                    <span><i>{accurateTemp}°C</i></span>
                    <span>{data.main}</span>
                </div>
                <div className="maxmin">
                    <span>Maximum : {data.tempMax}</span>
                    <span>Minimum : {data.tempMin}</span>
                    <span>Humidity : {data.humidity}%</span>
                    <span>Pressure : {data.pressure}</span>
                </div> 
            </div> 
        </div> 
     );
}

export default Current;