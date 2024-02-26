"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Today from './components/Today';
import Footer from './components/Footer';
import Hourly from './components/Hourly';

const Page = () => {
  const [data, setData] = useState();
  const [location, setLocation] = useState();
  const [laatitude, setLaatitude] = useState();
  const [loongitude, setLoongitude] = useState();
  const [forcast,setForcast] = useState();
  const [city,setcity] = useState();
  const [showToday, setShowToday] = useState(true); // State to track whether to show Today component
  const [showHourly, setShowHourly] = useState(false); // State to track whether to show Hourly component

  const handleToggleToday = () => {
    setShowToday(true); // Show Today component
    setShowHourly(false); // Hide Hourly component
  };

  const handleToggleHourly = () => {
    setShowToday(false); // Hide Today component
    setShowHourly(true); // Show Hourly component
  };

  useEffect(() => {
      if('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(({ coords }) => {
              const { latitude, longitude } = coords;
              setLocation({ latitude, longitude });
             setLaatitude(latitude)
             setLoongitude(longitude);
          })
      }
  }, []);


  const getData = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${laatitude},${loongitude}` }, 
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_Api,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
     
      const response = await axios.request(options);
      setData(response.data);

      setcity(response.data.location.name)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchWeatherForecast = async () => {
    let selectedCity = searchcity ? searchcity : city; // Use selected city if available, otherwise use the current city
  
    if (!selectedCity) {
      // If no selected city and no current city, use current location coordinates
      selectedCity = `${laatitude},${loongitude}`;
    }
  
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: selectedCity,
        days: '10'
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_Api,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      return setForcast(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(forcast,"forcastforcastforcast")
  useEffect(() => {
   
    if (laatitude !== null && loongitude !== null) { 
      getData();
    }
  }, [laatitude, loongitude]);

  useEffect(() => {
    fetchWeatherForecast()
    console.log(data);
  }, [data]);
 
  const [searchcity, setSearchCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_X_RapidAPI_Api;

  const handleChange = async (e) => {
      const inputCity = e.target.value;
      setSearchCity(inputCity);
      try {
          const response = await axios.get('https://weatherapi-com.p.rapidapi.com/search.json', {
              params: { q: inputCity },
              headers: {
                  'X-RapidAPI-Key': apiKey,
                  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
              }
          });
          setSuggestions(response.data);
      } catch (error) {
          console.error(error);
      }
  };

  const handleSuggestionClick = async (suggestedCity) => {
    setSearchCity(suggestedCity);
    try {
      const response = await axios.get('https://weatherapi-com.p.rapidapi.com/search.json', {
        params: { q: suggestedCity },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      });
      setWeatherData(response.data);
      setSuggestions([]); // Clear suggestions after selecting one
      await fetchWeatherForecast(suggestedCity); // Call fetchWeatherForecast with the selected city
    } catch (error) {
      console.error(error);
    }
  };
  console.log(searchcity,"searchcitysearchcitysearchcity")
  return (
    <div className="bg-white text-black">
          <div>
          <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather</span>
            </a>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
                <input
                    type="text"
                    placeholder="Enter City"
                    value={searchcity}
                    onChange={handleChange}
                    className="p-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-700 dark:text-white"
                />
                {suggestions.length > 0 && (
                    <ul className="absolute w-full mt-1 bg-white text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion.name)}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {suggestion.name}, {suggestion.region}, {suggestion.country}
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    type="submit"
                    className="absolute right-0 top-0 h-full p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-200 dark:focus:ring-gray-600"
                    onClick={(e) => {
                        e.preventDefault();
                        setSearchCity('');
                    }}
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M12 4a8 8 0 100 16 8 8 0 000-16z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M20 20l-4-4m4 0l-4 4m0 0l-4-4m4 4l4-4M6 12H4m2 0h2m0 0v-2m0 2v2m0 0l-4 4m4-4l4 4" />
                    </svg>
                </button>
            </form>
        </div>
    </nav>

   
</div>
<div className="flex gap-2 mt-5 ml-32">
<button onClick={handleToggleToday} className={`px-5 py-2 rounded-lg text-white ${showToday ? 'bg-blue-700' : 'bg-blue-500'}`}>Today</button>
        <button onClick={handleToggleHourly} className={`px-5 py-2 rounded-lg text-white ${showHourly ? 'bg-blue-700' : 'bg-blue-500'}`}>Hourly</button>
      </div>
         <div>
        {showToday && <Today  data2={forcast} />}
        {showHourly && <Hourly data={forcast} />}
      </div>
        <Footer />
    </div>
  );
};

export default Page;
