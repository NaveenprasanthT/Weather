import React, {useEffect, useState } from 'react';
import "./Searchbar.css";
import {BsFillCloudsFill,BsFillCloudLightningRainFill,BsCloudHaze2Fill,BsFillSunFill,BsSearch} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/weatherSlice';
import { useRef } from 'react';
import axios from 'axios';
import Message from '../Snackbar';

function SearchBar() {
    
    const place = useRef();
    const [open,setOpen] = useState(false)

    var [date,setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    const dispatch = useDispatch();
    const data= useSelector((state) => state.weather)
    const handleClick = async(e) => {
        e.preventDefault();
        try{

            const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${place.current.value}&appid=2d8505d29c49bbe1e4a9c83673213e7f&units=metric`)
            
            const city = res.data.name;
            const temp = res.data.main.temp;
            const main = res.data.weather[0].main;
            const tempMax = res.data.main.temp_max;
            const tempMin = res.data.main.temp_min;
            const humidity = res.data.main.humidity;
            const pressure = res.data.main.pressure;
            const lat = res.data.coord.lat;
            const lon = res.data.coord.lon        ;
            dispatch(update({city,temp,main,tempMax,tempMin,humidity,pressure,lat,lon}))
        }catch(err){
            setOpen(true)
        }
    }

    return (     
        <div className="SearchMain">
            {data.main === "Clear" && <span><BsFillSunFill/></span>}
            {data.main === "Clouds" && <span><BsFillCloudsFill/></span>}
            {data.main === "Smoke" && <span><BsFillCloudsFill/></span>}
            {data.main === "Rain" && <span><BsFillCloudLightningRainFill/></span>}
            {data.main === "Haze" && <span><BsCloudHaze2Fill/></span>}
            {data.main === "Mist" && <span><BsCloudHaze2Fill/></span>}
            <div className="search">
                <input type="text" placeholder={data.city} ref={place}/>
                <span onClick={handleClick}><BsSearch/></span>
            </div>
            <div className="dateandtime">
                <span>{date.toLocaleTimeString()}</span>
                <span>{date.toLocaleDateString()}</span>
            </div>
            <Message open={open} setOpen={setOpen}/>
        </div>
    );
}

export default SearchBar;