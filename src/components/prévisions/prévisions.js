import React, { useState } from 'react';
import Conditions from '../conditions/conditions';
const Previsions = () => {
    let [responseObj, setResponseObj] = useState({});
   function getPrevision() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Lille", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6913ab6c27msha1a2207d0fc7b53p14ed27jsnecf30127e7cc",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
    .catch(err => {
        console.error(err);
    });
   }
   return (
    <div>
    <h2>Prévisions météo actuelles </h2>
           <button onClick={getPrevision}>logo</button>
           <Conditions
               responseObj={responseObj}
               />
    </div>
   )
}
export default Previsions;