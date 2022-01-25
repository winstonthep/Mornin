import React from "react";
import Quote from './Quote.jsx';

const App = ({ name }) => {
  return (
    <>
      <h1>
        Mornin {name}!
      </h1>
      <div className="mornintop">
        <div className="weather">Today's Weather</div>
        <div className="quote">Quote of the Day
          <Quote />
        </div>
        <div className="todos">To-Do List</div>
      </div>
      <div className="morninbottom">
        <div className="wear">What should you wear?</div>
        <div className="newsandmisc">News & Misc </div>
      </div>
    </>
  );

}

export default App;