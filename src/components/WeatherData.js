import React from 'react';
import moment from 'moment/moment';

const WeatherData = (props) => {
  console.log(props.data?.name);
  console.log(props.data ? props.data : undefined);
  return (
    <div className='weather-data'>
      <div className='weather-data--city-name'>
        <h3>
          {props.data?.name}, {props.data?.sys.country}
        </h3>
        <p>
          <b>
            {props.data
              ? moment.unix(props.data.dt).format('DD.MM.YYYY')
              : undefined}
          </b>
        </p>
      </div>
      <div className='weather-data--details'>
        <p className='weather-data--desc'>
          <b>
            {props.data?.weather[0].description
              .split(' ')
              .map((word) => {
                return word[0].toUpperCase() + word.substr(1);
              })
              .join(' ')}
            <>&nbsp;</>|
          </b>
          <img
            src={`http://openweathermap.org/img/w/${props.data?.weather[0].icon}.png`}
          />
        </p>
        <p className='weather-data--temp'>
          <b>Temperature: </b>
          {(props.data?.main.temp - 273.15).toFixed(0)}
          {String.fromCodePoint(176)}
        </p>
        <p className='weather-data--pressure'>
          <b>Pressure: </b>
          {props.data?.main.pressure} mHPa
        </p>
        <p className='weather-data--humidity'>
          <b>Humidity: </b>
          {props.data?.main.humidity}%
        </p>
        <p className='weather-data--wind-speed'>
          <b>Wind: </b>
          {(props.data?.wind.speed * 3.6).toFixed(0)} km/h
        </p>
        <p className='weather-data--clouds'>
          <b>Clouds: </b>
          {props.data?.clouds.all}%
        </p>
        <p className='weather-data--sunrise'>
          <b>Sunrise: </b>
          {props.data
            ? moment.unix(props.data.sys.sunrise).format('HH:mm')
            : undefined}
        </p>
        <p className='weather-data--sunset'>
          <b>Sunset: </b>
          {props.data
            ? moment.unix(props.data.sys.sunset).format('HH:mm')
            : undefined}
        </p>
      </div>
    </div>
  );
};

export default WeatherData;
