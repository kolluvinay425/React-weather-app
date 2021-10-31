import React, { useState } from "react";
import { icons } from "react-icons/lib";
import { iconFinder } from "../utils/fetches";
import { Col, Row } from "react-bootstrap";
import "./Home.css";
export default function Weather({ d }) {
  const [setIcon, setSetIcon] = useState(undefined);
  const temperature = (temp) => {
    const inDegrees = Math.floor(temp - 273.15);
    return <h5>{inDegrees}&deg;</h5>;
  };
  const icon = (idd) => {
    iconFinder(idd);
  };
  return (
    <>
      <div className="col-2">
        {temperature(d.main.temp)}
        {/* <i className="wi wi-day-sunny display-1"></i> */}
        {iconFinder(d.weather[0].id)}
        <Row>
          <Col>{temperature(d.main.temp_min)}</Col>
          <Col>{temperature(d.main.temp_max)}</Col>
        </Row>
        {/* <i className={`wi ${icon(d.weather[0].id)} display-1`}></i> */}
        <p>{d.dt_txt}</p>
      </div>
    </>
  );
}
