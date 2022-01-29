import React, { useState, useEffect } from "react";
import Quote from './Quote.jsx';
import NewsMisc from './NewsMisc.jsx';
import Weather from './Weather.jsx';
import ToDoList from './ToDoList.jsx';
import Wear from './Wear.jsx';

const App = ({ name }) => {
  const [ currentTemp, setCurrentTemp ] = useState();
  const captureTemperature = (forecast) => {
    console.log('capture temp forecast:', forecast)
    setCurrentTemp(forecast.temperature);
  }
  return (
    <>
      <h1>
        Mornin {name}!
      </h1>
      <div className="mornintop">
        <div className="wear">
        <h2 id="wearheader">What to Wear Today</h2>
          <Wear temp={currentTemp} />
        </div>

        <div className="quote">
          <h2 id="quoteheader">Quote of the Day</h2>
          <Quote />
        </div>
        <div className="todos">
          <ToDoList />
        </div>
      </div>
      <div className="morninbottom">
        <div className="weather">
          <Weather capture={captureTemperature}/>
        </div>
        <div className="newsandmisc">
          <NewsMisc />
        </div>
      </div>
    </>
  );

}

export default App;