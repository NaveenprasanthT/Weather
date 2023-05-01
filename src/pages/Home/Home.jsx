import React from 'react';
import './Home.css';
import SearchBar from '../../components/Searchbar/Searchbar';
import Current from '../../components/CurrentWeather/CurrentWeather';
import { useSelector } from 'react-redux';
import Hour from '../../components/Hour/Hour';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai"

function Home() {
    const weather= useSelector((state) => state.weather)
    const [dailyWeather, setDailyWeather] = useState({});
    const fetchData = async() => {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${weather.lat}&lon=${weather.lon}&appid=2d8505d29c49bbe1e4a9c83673213e7f&units=metric`)
      setDailyWeather(res.data)
    }
    
    useEffect(()=>{
      fetchData();
    },[weather])
    
    return ( 
    <div className="Home" id={weather.main}>
      <SearchBar/>
      <Current/>
      <Hour data={dailyWeather}/>
      <p><AiOutlineArrowLeft/><AiOutlineArrowLeft/><AiOutlineArrowLeft/></p>
    </div>
     );
}

export default Home;