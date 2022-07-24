import React, { useEffect, useState } from "react";
import "../App.css";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const API_key = "b9b17e2ee08e4846d8146dd408a77f50";
// const daily_api = `api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_key}`;
// const current_api = `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}`;
// const hourly_api = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city name}&appid=${API key}`;

function Inputs({ currentData, setCurrentData }) {
  const [input, setInput] = useState("");
  const [lantitude, setLantitude] = useState("");
  const [longitude, setLongitude] = useState("");

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position) => {
        setLantitude(Math.floor(position.coords.latitude));
        setLongitude(Math.floor(position.coords.longitude));
      });
 onhandleGetCurrent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    OnhandleGetCity();
    // onhandleGetCurrent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);



  const OnhandleGetCity = async () => {
   
    const json = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}`
    );
    const fetchCityData = await json.json();

    setCurrentData(fetchCityData);

    console.log(currentData);
  };

  const onhandleGetCurrent = async () => {
     console.log(lantitude);
     console.log(longitude);
    const json = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lantitude}&lon=${longitude}&appid=${API_key}`
    );
    const fetchCurrentData = await json.json();

    setCurrentData(fetchCurrentData);

    console.log(fetchCurrentData);
  };

  return (
    <div className="input-container">
      <div className="left-input">
        <input
          type="text"
          className="input-text"
          placeholder="Search for city...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={OnhandleGetCity}>
          <UilSearch className="icon" />
        </button>
        <button onClick={onhandleGetCurrent}>
          <UilLocationPoint className="icon" />
        </button>
      </div>
      <div className="right-temperature-text">
        <button className="temperature-btn">°C</button>
        <p className="text-space">|</p>
        <button className="temperature-btn">°F</button>
      </div>
    </div>
  );
}

export default Inputs;
