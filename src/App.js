import React, { useState } from 'react';
import getData from './http.service'

import './App.css';

function App() {
  const [zones, setZones] = useState([])
  const [items, setItems] = useState([])

  if(zones.length == 0){
    getData().then((data) => {
      setZones(data.zones)
      setItems(data.items)
    })
  }
  
  return (
    <div className="row">
      <h1 className="col-md-12 index">Index</h1>
      <hr className="col-md-12"/>
      {zones.map((zone, index) => (
        <div className="col-md-12">
          <h3>{zone.replace(/^z/, '')}</h3>
          {items[zone.toString()] && items[zone.toString()]
              .map((item, index) => <label className="col-md-2 buildingName" key={index}>{item.buildingname}</label>)}
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default App;
