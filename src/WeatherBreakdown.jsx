import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherBreakdown = ({today, tonight}) => {
  console.log(today);
  console.log(tonight);
  if (today !== undefined && tonight !== undefined) {

    return (
      <>
        <div>Today<br></br>
          <img src={today.icon}></img>
          <div>{today.shortForecast}</div>
          <div>Temp: {today.temperature}</div>
          <div>Wind Speed: {today.windSpeed}</div>
          <div>Wind Direction: {today.windDirection}</div>
        </div>
        <div>Tonight<br></br>
          <img src={tonight.icon}></img>
          <div>{tonight.shortForecast}</div>
          <div>Temp: {tonight.temperature}</div>
          <div>Wind Speed: {tonight.windSpeed}</div>
          <div>Wind Direction: {tonight.windDirection}</div>
        </div>
      </>
    )
  } else {
    return (
      <></>
    )
  }
}

export default WeatherBreakdown;