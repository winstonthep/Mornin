import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Mornin {name}!
        </h1>
        <div className="mornintop">
          <div className="weather">Today's Weather</div>
          <div className="quote">Quote of the Day</div>
          <div className="todos">To-Do List</div>
        </div>
        <div className="morninbottom">
          <div className="wear">What should you wear?</div>
          <div className="newsandmisc">News & Misc </div>
          </div>
      </>
    );
  }
}

export default App;