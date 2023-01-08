import React from 'react';
import moment from 'moment';

const WeatherForecast = (props) => {
  return (
    <div className='weather-forecast'>
      <div className='weather-forecast--title'>
        <p>
          <b>4 Days Forecast</b>
        </p>
      </div>
      <div className='weather-forecast--days'>
        <div className='weather-forecast--day'>
          <b>{moment.unix(props.data[0]?.dt).format('dddd')}</b>
          <p>
            {(props.data[0]?.main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
          <img
            alt='weather icon'
            src={`http://openweathermap.org/img/w/${props.data[0]?.weather[0].icon}.png`}
          />
        </div>
        <div className='weather-forecast--day'>
          <b>
            {moment.unix(props.data[1]?.dt + props.timeZone).format('dddd')}
          </b>
          <p>
            {(props.data[1]?.main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
          <img
            alt='weather icon'
            src={`http://openweathermap.org/img/w/${props.data[1]?.weather[0].icon}.png`}
          />
        </div>
        <div className='weather-forecast--day'>
          <b>
            {moment.unix(props.data[2]?.dt + props.timeZone).format('dddd')}
          </b>
          <p>
            {(props.data[2]?.main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
          <img
            alt='weather icon'
            src={`http://openweathermap.org/img/w/${props.data[2]?.weather[0].icon}.png`}
          />
        </div>
        <div className='weather-forecast--day'>
          <b>
            {moment.unix(props.data[3]?.dt + props.timeZone).format('dddd')}
          </b>
          <p>
            {(props.data[3]?.main.temp - 273.15).toFixed(0)}
            {String.fromCodePoint(176)}
          </p>
          <img
            alt='weather icon'
            src={`http://openweathermap.org/img/w/${props.data[3]?.weather[0].icon}.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
