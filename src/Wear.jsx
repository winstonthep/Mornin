import React, { useState, useEffect } from 'react';
import axios from 'axios';
import tank from '../assets/tank-top-64.png';
import tshirt from '../assets/tshirt-64.png';
import shorts from '../assets/shorts-64.png';
import sweater from '../assets/sweater-64.png';
import pants from '../assets/jeans-64.png';
import coat from '../assets/winter-64.png';

const Wear = ({ temp }) => {
  const [ topItem, setTopItem ] = useState('');
  const [ bottomItem, setBottomItem ] = useState('');
  const [ currentTemp, setCurrentTemp ] = useState(temp);
  const [ tempPhrase, setTempPhrase ] = useState('');

  const showClothes = () => {
    console.log('this fired')
    if (temp >= 90) {
      setTopItem(tank);
      setBottomItem(shorts);
      setTempPhrase('WOWZA it is hot! Dress light!');
    }
    if (temp >= 80 && temp < 90) {
      setTopItem(tshirt);
      setBottomItem(shorts);
      setTempPhrase('It is getting a little toasty outside!');
    }
    if (temp >= 60 && temp < 80) {
      setTopItem(tshirt);
      setBottomItem(pants);
      setTempPhrase('Man it is actually pretty warm out today!');
    }
    if (temp >= 45 && temp < 59) {
      setTopItem(sweater);
      setBottomItem(pants);
      setTempPhrase('It is getting a little brisk outside!');
    }
    if (temp <= 45) {
      setTopItem(coat);
      setBottomItem(pants);
      setTempPhrase('It is COLD! Time to bundle up!');
    }
  }
  useEffect(() => {
      showClothes();
  }, currentTemp);
  if (temp !== undefined) {
    return (
      <div className="whattowear">
        <div className="clothes">
          <img className="topitem" src={topItem}></img>
          <img className="bottomitem" src={bottomItem}></img>
        </div>
        <h2 className="tempphrase">{tempPhrase}</h2>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}

export default Wear;