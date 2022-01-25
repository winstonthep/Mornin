import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityDropdown = ({ cities, change, selectedCity }) => {
  return (
    <>
      <select value={selectedCity} onChange={change}>
        {cities.map((city, i) => (
          <option key={city.city + i} value={city.id}>{city.city}, {city.state}</option>
        ))}
      </select>
    </>
  )
}

export default CityDropdown;