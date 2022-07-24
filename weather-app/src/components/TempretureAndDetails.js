import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TempretureAndDetails() {
  return (
    <div className="tem-details-container">
      <div className="weather-state">
        <p className="text-weather-state"> Cloudy</p>
      </div>
      <div className="weather-detail">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="weather pic"
          className="weather-icon"
        />

        <p className="degree">34°</p>
        <div className="right-colum-detail-container">
          <div className="specific-info">
            <UilTemperature />
            Real felt:
            <span>32°</span>
          </div>
          <div className="specific-info">
            <UilTear />
            Humidity:
            <span>65%</span>
          </div>
          <div className="specific-info">
            <UilWind />
            Wind:
            <span>11 km/h</span>
          </div>
        </div>
      </div>

      <div className="related-weather-info-container">
        <UilSun />
        <p> 06:45 AM </p>
        <p>|</p>

        <UilSunset />
        <p> 07:45 PM </p>
        <p>|</p>

        <UilArrowUp />
        <p>
          {" "}
          High: <span>45°</span>
        </p>
        <p>|</p>

        <UilArrowDown />
        <p>
          {" "}
          Low:<span>40°</span>{" "}
        </p>
        <p>|</p>
      </div>
    </div>
  );
}

export default TempretureAndDetails;
