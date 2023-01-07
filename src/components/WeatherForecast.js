import React from 'react';
import moment from 'moment';

const WeatherForecast = (props) => {
  return (
    <div className='weather-forecast'>
      <div className='weather-forecast--title'>
        <p>
          <b>5 Days Forecast</b>
        </p>
      </div>
      <div className='weather-forecast--days'>
        <div className='weather-forecast--day'>
          <b>{moment.unix(props.data[0].dt).format('dddd')}</b>
          <p>
            {(props.data[0].main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
        </div>
        <div className='weather-forecast--day'>
          <b>{moment.unix(props.data[1].dt).format('dddd')}</b>
          <p>
            {(props.data[1].main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
        </div>
        <div className='weather-forecast--day'>
          <b>{moment.unix(props.data[2].dt).format('dddd')}</b>
          <p>
            {(props.data[2].main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
        </div>
        <div className='weather-forecast--day'>
          <b>{moment.unix(props.data[3].dt).format('dddd')}</b>
          <p>
            {(props.data[3].main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
        </div>
        <div className='weather-forecast--day'>
          <b>{moment.unix(props.data[4].dt).format('dddd')}</b>
          <p>
            {(props.data[4].main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
