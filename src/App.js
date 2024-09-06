import './App.css';
// import './style.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // const weatherapi = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bd5e378503939ddaee76f12ad7a97608"
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [error, setError] = useState(null); 
  const Apikey = "bd5e378503939ddaee76f12ad7a97608"
  const weatherapi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${Apikey}`

  const SearchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(weatherapi)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
          setError(null); 
        })
        .catch((err) => {
          console.error('Error fetching the weather data:', err);
          if (err.response && err.response.status === 404) {
            setError('Location not found. Please try again.');
          } else {
            setError('An error occurred. Please try again later.');
          }
        });
      setLocation('');
    }
  };
  return (

    <div className="App">
      <div className='search'>
        <input id="inp" type='text' value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter location ..'
          onKeyPress={SearchLocation} ></input>
      </div>
      <div className='container'>
      {data.main != undefined &&
        <div className='top'>
          <div className='first'>
            
              {data.main ?<div className='temp'> <h1>{data.main.temp.toFixed()}°F</h1> </div>: null}

            
            <div className='location'>
              <p>{data.name} </p>
            </div>
          </div>
            <div className='discrption'>
              {data.weather ? <><div className='weatherimg'></div> <p>{data.weather[0].main}</p>  </>: null}

            </div>

        </div>
      }
      
        {data.name != undefined &&
          <div className='bottom' >
            <div className='feels'>
              {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}

              <p>Feels like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p>{data.main.humidity.toFixed()}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
              <p>Wind speed</p>
            </div>
          </div>}
      </div>
    </div>
  );
}

export default App;
