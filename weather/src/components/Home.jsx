import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import Weather from "./Weather";
import "./Home.css";
export default function Home() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const handleSubmit = async () => {
    try {
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=f0fa9328c815f640acdbf481a0f33916`
      );
      if (resp.ok) {
        const data = await resp.json();
        setWeatherData(data);
        console.log("weather data----->", data);
      }
    } catch (error) {}
  };
  return (
    <div className="container">
      <div className="row">
        {/* section one */}
        <div className="col-md-5 col-sm-5" id="sec-one">
          {/* <h3>i'm section one here</h3> */}
          <InputGroup className="mb-3" id="search">
            <InputGroup.Text>Enter City</InputGroup.Text>
            <FormControl
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={handleSubmit}>
              <FcSearch size={"20px"} />
            </Button>
          </InputGroup>
        </div>

        {/* section two */}

        <div className="col-7">
          {/* <h3>i'm section two here</h3> */}
          <div className="row">
            {weatherData &&
              weatherData.list.slice(0, 6).map((data) => <Weather d={data} />)}
          </div>

          {weatherData && <h2>{weatherData.name}</h2>}
        </div>
      </div>
    </div>
  );
}
