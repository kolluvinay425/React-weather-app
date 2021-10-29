import React, { useState } from "react";
import { icons } from "react-icons/lib";

export default function Weather({ d }) {
  // const [Thunderstorm,set]
  // const [icons setIcons] = useState([{
  //     Thunderstorm:"wi-thunderstorm",
  //     Drizzle:"wi-sleet",
  //     Rain:wi-"snow",
  //     Atmosphere:"wi-fog",
  //     Clear:"wi-day-sunny",
  //     Clouds:"wi-day-fog",
  // }])

  const temperature = (temp) => {
    const inDegrees = Math.floor(temp - 273.15);
    return <h3>{inDegrees}&deg;</h3>;
  };
  const icon = (id) => {
    switch (id) {
      case (id >= 200) & (id <= 232):
        return;
        break;

      default:
        break;
    }
  };
  return (
    <>
      <h3>Weather condition in {d.city.name}</h3>
      <div className="col-2">
        {temperature(d.main.temp)}
        <i className="wi wi-day-sunny display-1"></i>
        {/* <i className={`wi ${icon(d.weather[0].id)} display-1`}></i>
        {icon(d.weather[0].id)} */}
        <p>{d.dt_txt}</p>
      </div>
    </>
  );
}
