"use client"
import React, { useEffect, useState } from 'react'



const Today = ({ data2 }) => {
    console.log(data2, "data2data2data2data2data2data2")
    return (
        <div className="ml-32  -mt-10">
            <div className=' mt-12  flex  h-16  mb-4 ' >
                <div className='flex justify-center bg-blue-700  rounded-xl'>
                    <h1 className='text-white  px-12 font-bold flex items-center'>
                        <img src={data2?.current?.condition?.icon} />
                        <span>
                            {data2?.location?.name},{data2?.location?.region} As of {data2?.location?.localtime}
                        </span>
                    </h1>

                </div>

            </div>
            <div className=" bg-blue-400 w-4/5 flex items-center justify-around rounded-xl" >
                <div className>
                    <h1 className="text-[8rem] px-3 text-white">{data2?.current?.temp_c}°</h1>
                    <h2 className="text-[2rem] px-3 -mt-4 text-white">{data2?.current?.condition?.text}</h2>
                    {/* <h3 className="text-[2rem] px-3">day32deg Night 21deg</h3>     */}
                </div>
                <div>
                    <img className="w-72 object-contain" src={data2?.current?.condition?.icon} />
                </div>
            </div>
            <div className="mt-8 flex flex-col gap-5 ">
                <h3 className="text-[3rem] font-semibold">Today forecast for {data2?.location?.name},{data2?.location?.region}</h3>
                <div className=" flex flex-row gap-4 ">
                    <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800 h-[20vh] px-4 w-96">
                        <h1 className="text-white font-light text-[2rem]">sunrise</h1>
                        <img src={data2?.forecast?.forecastday[0]?.hour[6]?.condition?.icon} />
                        <div className="flex items-center gap-10">
                            <h3 className="text-white font-bold">{data2?.forecast?.forecastday[0]?.astro.sunrise}</h3>
                            <h2 className="text-white text-[1.6rem]">{data2?.forecast?.forecastday[0]?.hour[6]?.temp_c}°</h2>
                        </div>

                    </div>
                    <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800 h-[20vh] px-4 w-96">
                        <h1 className="text-white font-light text-[2rem]" >sunset</h1>
                        <img src={data2?.forecast?.forecastday[0]?.hour[18]?.condition?.icon} />
                        <div className="flex items-center gap-10">
                            <h3 className="text-white font-bold">{data2?.forecast?.forecastday[0]?.astro.sunset}</h3>
                            <h2 className="text-white text-[1.6rem]">{data2?.forecast?.forecastday[0]?.hour[18]?.temp_c}°</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800 h-[20vh] px-4 w-96">
                        <h1 className="text-white font-light text-[2rem]">moonrise</h1>
                        <img src={data2?.forecast?.forecastday[0]?.hour[19]?.condition?.icon} />
                        <div className="flex items-center gap-10">
                            <h3 className="text-white font-bold" >{data2?.forecast?.forecastday[0]?.astro.moonrise}</h3>
                            <h2 className="text-white text-[1.6rem]" >{data2?.forecast?.forecastday[0]?.hour[19]?.temp_c}°</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800  h-[20vh] px-4 w-96">
                        <h1 className="text-white font-light text-[2rem]">moonset</h1>
                        <img src={data2?.forecast?.forecastday[1]?.hour[7]?.condition?.icon} />
                        <div className="flex items-center gap-10">
                            <h3 className="text-white font-bold" >{data2?.forecast?.forecastday[0]?.astro.moonset}</h3>
                            <h2 className="text-white text-[1.6rem]" >{data2?.forecast?.forecastday[1]?.hour[7]?.temp_c}°</h2>
                        </div>

                    </div>
                </div>
            </div>
            <h1 className="text-[3rem]  mt-3 font-semibold">Weather Today in {data2?.location?.name},{data2?.location?.region}</h1>
            <div className="bg-blue-400 p-4 w-4/5 rounded-xl" >
                <h1 className="text-[3rem] text-white">Feels Like</h1>
                <h2 className="  text-4xl text-white font-bold mb-4 ">{data2?.current?.feelslike_c}°</h2>
                <div className="flex gap-3 ">
                    <div className="bg-white rounded-lg p-4 w-1/4">
                        <p className="text-2xl font-medium">High/Low</p>
                        <p className="text-blue-800 font-bold text-3xl">{data2?.current?.pressure_in}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 w-1/4">
                        <p className="text-2xl font-medium">Wind</p>
                        <p className="text-blue-800 font-bold text-3xl">{data2?.current?.wind_kph}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 w-1/4">
                        <p className="text-2xl font-medium">Humidity</p>
                        <p className="text-blue-800 font-bold text-3xl">{data2?.current?.humidity}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 w-1/4">
                        <p className="text-2xl font-medium">Dew Point</p>
                        <p className="text-blue-800 font-bold text-3xl">{data2?.current?.pressure_in}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 w-1/4">
                        <p className="text-2xl font-medium">Pressure</p>
                        <p className="text-blue-800 font-bold text-3xl">{data2?.current?.pressure_in}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 w-1/4">
                        <p className="text-2xl font-medium">UV Index</p>
                        <p className="text-blue-800 font-bold text-3xl">{data2?.current?.uv}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 w-1/4">
                        <p className="text-2xl font-medium">Visibility</p>
                        <p className="text-blue-800 font-bold text-3xl">{data2?.current?.vis_km}</p>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h1 className="text-[3rem] font-semibold">Hourly Forecast</h1>
                <div className="mt-5">
                    <div className=" flex flex-row gap-4  w-4/5">
                        <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800  w-1/4 px-4">
                            <h1 className="text-white font-bold">Now</h1>
                            <img src={data2?.forecast?.forecastday[0]?.hour[7]?.condition?.icon} />
                            <h3 className="text-white">{data2?.forecast?.forecastday[0]?.hour[7]?.feelslike_c}</h3>
                        </div>
                        <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800  w-1/4 px-4">
                            <h1 className="text-white font-bold" >15:30</h1>
                            <img src={data2?.forecast?.forecastday[0]?.hour[15]?.condition?.icon} />
                            <h3 className="text-white">{data2?.forecast?.forecastday[0]?.hour[15]?.feelslike_c}</h3>
                        </div>
                        <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800  w-1/4 px-4">
                            <h1 className="text-white font-bold">23:30</h1>
                            <img src={data2?.forecast?.forecastday[0]?.hour[23]?.condition?.icon} />
                            <h3 className="text-white">{data2?.forecast?.forecastday[0]?.hour[23]?.feelslike_c}</h3>
                        </div>
                        <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800  w-1/4  px-4">
                            <h1 className="text-white font-bold">00:30</h1>
                            <img src={data2?.forecast?.forecastday[0]?.hour[0]?.condition?.icon} />
                            <h3 className="text-white">{data2?.forecast?.forecastday[0]?.hour[0]?.feelslike_c}</h3>
                        </div>
                        <div className="flex flex-col items-center py-2 rounded-lg bg-blue-800  w-1/4  px-4">
                            <h1 className="text-white font-bold">01:30</h1>
                            <img src={data2?.forecast?.forecastday[0]?.hour[1]?.condition?.icon} />
                            <h3 className="text-white">{data2?.forecast?.forecastday[0]?.hour[1]?.feelslike_c}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today