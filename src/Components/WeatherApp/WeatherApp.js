import React, { useState } from "react"
import './WeatherApp.css'

import  cloudy from "../Assets/cloudy.png"
import  humidity from "../Assets/humidity icon.png"
import  rain from "../Assets/rain.png"
import  snow from "../Assets/snow.png"
import  storm from "../Assets/storm.png"
import  sun from "../Assets/sun.png"
import  temperature from "../Assets/temperature icon.png"
import  weather1 from "../Assets/weather.png"
import  search_icon from "../Assets/search_icon.png"
import  wind from "../Assets/wind.png"
import mist from "../Assets/mist.png"
import cloudy2 from '../Assets/cloudy2.png'
import cloudy3 from "../Assets/cloudy3.png"
import showerrain from "../Assets/showerrain.png"

 export default function WeatherApp(){

    let api_key = '1b2e6c23d87c84d01a4b4d53b59204ff';

    const [wicon, setWicon] = useState(sun)

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === "")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        

        let response = await fetch(url);
        let data =  await response.json();

        const humidity = document.getElementsByClassName("humidity-percentage")
        const wind = document.getElementsByClassName('wind-rate')
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        const latitude = document.getElementsByClassName("latitude")
        const longitude = document.getElementsByClassName("longitude")
        const description =document.getElementsByClassName("description")

        humidity[0].innerHTML = (data.main.humidity) +"  %";
        wind[0].innerHTML = (data.wind.speed)+ " km/h";
        location[0].innerHTML = data.name;
        temperature[0].innerHTML = data.main.temp +" °C";
        latitude[0].innerHTML = data.coord.lon + " °S";
        longitude[0].innerHTML = data.coord.lat + " °N";
        description[0].innerHTML = data.weather[0].description
        
        if(data.weather[0].icon === "01d" || data.weather[0].icon ===("01n")){
            setWicon(sun)
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon ===("02n")){
            setWicon(cloudy)
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon ===("03n")){
            setWicon(cloudy2)
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon ===("04n")){
            setWicon(cloudy3)
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon ===("09n")){
            setWicon(showerrain)
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon ===("10n")){
            setWicon(rain)
        }
        else if(data.weather[0].icon === "11d" || data.weather[0].icon ===("11n")){
            setWicon(storm)
        }
        else if(data.weather[0].icon === "12d" || data.weather[0].icon ===("12n")){
            setWicon(snow)
        }
        else if(data.weather[0].icon === "50d" || data.weather[0].icon ===("50n")){
            setWicon(mist)
        }
        else (
            setWicon("not available")
        )
    }


    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search"/>
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" style={{height:"40px"}}/>
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt=""/>
            
            </div>
            <div className="description">Description ----</div>
            <div className="weather-temp">----°C</div>
            <div className="weather-location">Location: -----</div>
            
            <div className="loclac" style={{display:"flex", justifyContent:'center'}}>
                 <div className="latitude">Latitude: ----- °S</div>
                 <div className="longitude">Longitude: ----- °N</div>
            </div>
           
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percentage">----%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">----km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}