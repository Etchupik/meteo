import React from 'react';

const conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <h2><strong>{props.responseObj.name}</strong></h2>
                   <p>II fait actuellement {Math.round(props.responseObj.main.temp - 273.15)} °C avec {props.responseObj.weather[0].description}.</p>
                   <p>temp Min: {Math.round(props.responseObj.main.temp_min - 273.15)} °C</p>
                   <p>temp Max: {Math.round(props.responseObj.main.temp_max - 273.15)} °C</p>
                   <p>humidité: {props.responseObj.main.humidity} %</p>

               </div>
           : null
           }
       </div>
   )
}

export default conditions;