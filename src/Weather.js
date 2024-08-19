import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  
  const getWeather = async (city) => {
    const apiKey = 'fb7227dfffc8dfabb28eff353fd7aa60'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setError('City not found');
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      getWeather(city);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700">
      <div className=" bg-sky-300 p-6 w-[40vw] h-[68vh]  shadow-lg">
        <div className='flex flex-row items-center justify-center '>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            className="p-2 outline-none text-blue-600 bg-slate-100  w-[20vw] rounded-2xl  "
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 hover:bg-slate-500 h-8 w-8 outline-none bg-slate-200 text-black rounded-full ml-[13px]"
          >
            <FaSearch/>
          </button>
        </form>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {weather && (
          <div className=' mt-3 text-white'>
             <div className=' flex items-center justify-center  '>
          <img src=" http://openweathermap.org/img/wn/10d@2x.png" className=' w-28 h-14' />
           
          <p className='text-lg capitalize'>{weather.weather[0].description}</p>
               </div>
               <div className='mt-3 flex items-center justify-center'>
                <h1 className='text-sky-600'>{weather.main.temp}°C</h1>
               
               </div>
               <div className='flex flex-row items-center justify-center mt-2'>
                <div className='w-1 h-1.5 mr-2'><FaLocationDot /></div>
                <div><p className='ml-[7px]'>{weather.name},</p></div>
                <div><p>{weather.sys.country}</p></div>
                </div>
                <div className='flex flex-row  justify-evenly mt-5'>
                   <div className='flex flex-col bg-sky-700 w-[10vw] h-[140px] rounded-lg mr-20 pt-2.5 pl-4'>
                     <div className=' ml-8 w-8 h-[40px]'><FaWind size={34}/></div>
                     <div><p>{weather.wind.speed} km/ph</p></div>
                     <div>WIND SPEED</div>
                   </div>
                   <div className='flex flex-col bg-sky-700 w-[10vw] h-[140px] rounded-lg pt-2.5 pl-4'>
                     <div className='mb-2 '> <WiHumidity size={34}/></div>
                     <div><p className='mb-2'>{weather.main.humidity}%</p></div>
                     <div>HUMIDITY</div>
                   </div>
                  </div> 

          </div>
        )}
      </div>
    </div>
  );
};
export default Weather;
