import React,{useState} from 'react'

const Hourly = ({ data }) => {
    const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedTimeIndex(selectedTimeIndex === index ? null : index);
    };
    console.log(data?.forecast?.forecastday[0].hour, "datadatadatadatadatadata")

    return (
        <div className="text-white  flex flex-col  mx-32 mt-5 ">
            <h1 className="font-semibold text-4xl text-black">Hourly whether</h1>
            <div className="flex">
                <div>
                <h1 className="text-2xl mb-5 text-center text-black">{data?.forecast?.forecastday[0].date} </h1>
        {data?.forecast?.forecastday[0].hour?.map((day, index) => (
            <div key={index} className="flex flex-col w-5/5 mx-2">
               
                <button className="bg-blue-800 px-5 py-4 rounded-xl mt-4" onClick={() => handleClick(index)}>{day.time}</button>
                {selectedTimeIndex === index && (
                        <div className="flex gap-4 justify-center bg-blue-200 p-4 rounded-xl">
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2" >
                          <p className="flex-grow text-center text-2xl font-medium">Feels Like <br/> {day.humidity}°C</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">Wind <br/>{day.wind_kph} km/h</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">Humidity <br/> {day.humidity}%</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">UV Index <br/> {day.uv}</p>
                        </div>
                      </div>
                    )}
            </div>
        ))}
                </div>
                <div>
     
                <h1 className="text-2xl mb-5 text-center text-black">{data?.forecast?.forecastday[1].date} </h1>
        {data?.forecast?.forecastday[1].hour?.map((day, index) => (
            <div key={index} className="flex flex-col w-5/5 mx-2">
               
                <button className="bg-blue-800 px-5 py-4 rounded-xl mt-4" onClick={() => handleClick(index)}>{day.time}</button>
                {selectedTimeIndex === index && (
                        <div className="flex gap-4 justify-center bg-blue-200 p-4 rounded-xl">
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2" >
                          <p className="flex-grow text-center text-2xl font-medium">Feels Like <br/> {day.humidity}°C</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">Wind <br/>{day.wind_kph} km/h</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">Humidity <br/> {day.humidity}%</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">UV Index <br/> {day.uv}</p>
                        </div>
                      </div>
                    )}
            </div>
        ))}
                </div>
                    <div>
                    <h1 className="text-2xl mb-5 text-center text-black">{data?.forecast?.forecastday[2].date} </h1>
        {data?.forecast?.forecastday[2].hour?.map((day, index) => (
            <div key={index} className="flex flex-col w-5/5 ">
               
                <button className="bg-blue-800 px-5 py-4 rounded-xl mt-4" onClick={() => handleClick(index)}>{day.time}</button>
                {selectedTimeIndex === index && (
                        <div className="flex gap-4 justify-center bg-blue-200 p-4 rounded-xl">
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2" >
                          <p className="flex-grow text-center text-2xl font-medium">Feels Like <br/> {day.humidity}°C</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">Wind <br/>{day.wind_kph} km/h</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">Humidity <br/> {day.humidity}%</p>
                        </div>
                        <div className="flex flex-row bg-blue-600 text-white p-2 rounded-xl mt-2">
                          <p className="flex-grow text-center text-2xl font-medium">UV Index <br/> {day.uv}</p>
                        </div>
                      </div>
                    )}
            </div>
        ))}
                    </div>


            </div>
          
    </div>
    )
}

export default Hourly