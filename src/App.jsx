import React from "react";
import Quote from './Quote.jsx';
import NewsMisc from './NewsMisc.jsx';
import Weather from './Weather.jsx';

const App = ({ name }) => {
  return (
    <>
      <h1>
        Mornin {name}!
      </h1>
      <div className="mornintop">
        <div className="wear">What should you wear?</div>
        <div className="quote">Quote of the Day
          <Quote />
        </div>
        <div className="todos">To-Do List</div>
      </div>
      <div className="morninbottom">
        <div className="weather">Today's Weather
          <Weather />
        </div>
        <div className="newsandmisc">News & Misc
          <NewsMisc />
        </div>
      </div>
    </>
  );

}

export default App;