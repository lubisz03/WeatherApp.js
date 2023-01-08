import React, { Component, useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Weather from './components/Weather';

const App = () => {
  const [cityName, setCityName] = useState();

  const handleCityName = (city) => {
    setCityName(city);
    console.log(city);
  };

  return (
    <>
      <BrowserRouter>
        <Header handleCityName={(city) => handleCityName(city)} />
        <Routes>
          <Route path='/' element={<Weather cityName={cityName} />} />
          <Route
            path='/WeatherApp.js'
            element={<Weather cityName={cityName} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
