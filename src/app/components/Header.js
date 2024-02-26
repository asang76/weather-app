
import React, { useState } from 'react'
import axios from 'axios';

const Header = () => {
  const [searchcity, setSearchCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '03ad0eb30amshd012f52ae904cf5p17497ejsnb4ea71c6f938';

    const handleChange = async (e) => {
        const inputCity = e.target.value;
        setSearchCity(inputCity);
        try {
            const response = await axios.get('https://weatherapi-com.p.rapidapi.com/search.json', {
                params: { q: inputCity },
                headers: {
                    'NEXT_PUBLIC_X_RapidAPI_Key': apiKey,
                    'NEXT_PUBLIC_X_RapidAPI_Host': 'weatherapi-com.p.rapidapi.com'
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
                    'NEXT_PUBLIC_X_RapidAPI_Key': apiKey,
                    'NEXT_PUBLIC_X_RapidAPI_Host': 'weatherapi-com.p.rapidapi.com'
                }
            });
            setWeatherData(response.data);
            setSuggestions([]); // Clear suggestions after selecting one
        } catch (error) {
            console.error(error);
        }
    };


  return (
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
                    <ul className="absolute w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
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
                        setCity('');
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
  )
}

export default Header