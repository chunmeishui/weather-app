import React from 'react'

function Forecast({title}) {
  return (
    <div className="forcast-container">
      <div>
        <p>{title}</p>
      </div>
      <hr />
      <div className="hour-forecast-container">
        <div className="hour-forecast-item">
          <p>04:30 pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" />
          <p>22°</p>
        </div>
        <div className="hour-forecast-item">
          <p>04:30 pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" />
          <p>22°</p>
        </div>
        <div className="hour-forecast-item">
          <p>04:30 pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" />
          <p>22°</p>
        </div>
        <div className="hour-forecast-item">
          <p>04:30 pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" />
          <p>22°</p>
        </div>
        <div className='hour-forecast-item'>
          <p>04:30 pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" />
          <p>22°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast
