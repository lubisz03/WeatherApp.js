import React, { useState } from 'react';
import {
  NavLink,
  Link,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const [city, setCity] = useState();

  const handleClick = (e) => {
    if (city.trim()) {
      e.preventDefault();
      props.handleCityName(city);
      document.getElementById('city-inpt').value = '';
    } else {
      e.preventDefault();
      console.log('Enter Valid City Name');
    }
  };

  return (
    <div className='header'>
      <h1 className='header--title'>WeatherApp.js</h1>
      <form className='header--search'>
        <input
          id='city-inpt'
          type='text'
          placeholder='City'
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleClick}>
          <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default Header;
