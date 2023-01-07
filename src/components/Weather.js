import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import WeatherData from './WeatherData';
import WeatherForecast from './WeatherForecast';
import moment from 'moment';

const Weather = (props) => {
  const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5';
  const REACT_APP_API_URL_2 = 'http://api.openweathermap.org/geo/1.0/direct?';
  const REACT_APP_API_KEY = '1457106febae40f9314a85c8165f6e90';

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [data, setData] = useState();
  const [foreData, setForeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLocation, setIsLocation] = useState(true);

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [lat, lon, props.cityName]);

  async function fetchData() {
    setIsLoading(true);
    if (props.cityName != undefined) {
      await fetch(
        `${REACT_APP_API_URL_2}q=${props.cityName}&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLat(() => data[0].lat);
          setLon(() => data[0].lon);
        });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(() => position.coords.latitude);
          setLon(() => position.coords.longitude);
          setIsLocation(true);
        },
        (error) => setIsLocation(false)
      );
    }

    if (lat && lon) {
      await fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));

      await fetch(
        `${REACT_APP_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          data.list.map((item, idx) => {
            if (
              idx >= 4 &&
              Number(moment.unix(item.dt).format('HH')) > 12 &&
              Number(moment.unix(item.dt).format('HH')) < 15
            ) {
              setForeData((prevState) => [...prevState, item]);
            }
          });
        });
    }
  }

  return (
    <div className='weather'>
      {isLoading ? (
        isLocation || props.cityName != undefined ? (
          <ReactLoading color={'#2d033b'} type={'spin'} />
        ) : (
          <h1>Enter Valid City Name</h1>
        )
      ) : data != undefined ? (
        <>
          <WeatherData data={data} />
          <WeatherForecast data={foreData} />
        </>
      ) : (
        <h1>Enter Valid City Name</h1>
      )}
    </div>
  );
};

export default Weather;
