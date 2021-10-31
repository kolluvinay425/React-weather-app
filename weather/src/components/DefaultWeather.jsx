import React from "react";
import { iconFinder } from "../utils/fetches";
import { Col, Row } from "react-bootstrap";
export default function DefaultWeather({
  idd,
  tempp,
  weatherData,
  currentWeatherTemp,
  currentWeatherIcon,
  currentWeatherMinTemp,
  currentWeatherMaxTemp,
}) {
  console.log("iugufysygkhustjsjyhf", currentWeatherTemp);
  console.log("iugufysygkhustjsjyhf", currentWeatherIcon);
  console.log("iugufysygkhustjsjyhf", currentWeatherMinTemp);
  const temperature = (temp) => {
    const celsious = Math.floor(temp - 273.15);
    return <h1>{celsious}&deg;</h1>;
  };

  const icon = () => {
    // const idd = localWeatherData && localWeatherData.weather[0].id;
    console.log("khvkhv", idd);
    if ((idd >= 200) & (idd <= 232)) {
      return <i id="icon_" className="wi wi-day-lightning  display-1"></i>;
    } else if ((idd >= 300) & (idd <= 321)) {
      return <i id="icon_" className="wi wi-day-rain  display-1"></i>;
    } else if ((idd >= 500) & (idd <= 531)) {
      return <i id="icon_" className="wi wi-day-rain  display-1"></i>;
    } else if ((idd >= 600) & (idd <= 622)) {
      return <i id="icon_" className="wi wi-day-snow-wind  display-1"></i>;
    } else if ((idd >= 701) & (idd <= 781)) {
      return <i id="icon_" className="wi wi-windy  display-1"></i>;
    } else if ((idd >= 801) & (idd <= 805)) {
      return <i id="icon_" className="wi wi-smog  display-1"></i>;
    } else {
      return <i id="icon_" className="wi wi-smog  display-1"></i>;
    }
  };
  return (
    <div>
      <div className="row">
        {weatherData ? (
          <div>
            {iconFinder(currentWeatherIcon)}
            {temperature(currentWeatherTemp)}
            <Row>
              <Col>{temperature(currentWeatherMinTemp)}</Col>
              <Col>{temperature(currentWeatherMaxTemp)}</Col>
            </Row>
          </div>
        ) : (
          <div>
            <h1>weather in rome</h1>
            <div>
              {icon()}
              {temperature(tempp)}
              <Row>
                <Col>{temperature(currentWeatherMinTemp)}</Col>
                <Col>{temperature(currentWeatherMaxTemp)}</Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
