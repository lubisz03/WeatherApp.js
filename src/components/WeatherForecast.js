import React from 'react';

const WeatherForecast = (props) => {
  return (
    <div className='weather-forecast'>
      <div className='weather-forecast--title'>
        <h3>5 Days Forecast</h3>
      </div>
      <div className='weather-forecast--days'>
        <div className='weather-forecast--day'>
          <b>Monday</b>
          <p>7</p>
        </div>
        <div className='weather-forecast--day'>
          <b>Monday</b>
          <p>7</p>
        </div>
        <div className='weather-forecast--day'>
          <b>Monday</b>
          <p>7</p>
        </div>
        <div className='weather-forecast--day'>
          <b>Monday</b>
          <p>7</p>
        </div>
        <div className='weather-forecast--day'>
          <b>Monday</b>
          <p>7</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
