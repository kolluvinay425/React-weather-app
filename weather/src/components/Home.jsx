import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import Weather from "./Weather";
import "./Home.css";
import { getWeather, iconFinder, searchWeatherByCity } from "../utils/fetches";
import DefaultWeather from "./DefaultWeather";
export default function Home() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [localWeatherData, setLocalWeather] = useState([]);
  const [iconId, setIconId] = useState("");
  const [tempp, setTemp] = useState(null);
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState(null);
  const [currentWeatherTemp, setCurrentWeatherTemp] = useState(null);
  const [currentWeatherMinTemp, setCurrentWeatherMinTemp] = useState(null);
  const [currentWeatherMaxTemp, setCurrentWeatherMaxTemp] = useState(null);

  const handleSubmit = async () => {
    try {
      const resp = await searchWeatherByCity(query);
      if (resp) {
        setWeatherData(resp);
        setCurrentWeatherIcon(resp.list[0].weather[0].id);
        setCurrentWeatherTemp(resp.list[0].main.temp);
        setCurrentWeatherMinTemp(resp.list[0].main.temp_min);
        setCurrentWeatherMaxTemp(resp.list[0].main.temp_max);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const localWeather = async () => {
      try {
        const resp = await getWeather();
        if (resp) {
          setLocalWeather(resp);
          setTemp(resp.main.temp);
          setIconId(resp.weather[0].id);
          setCurrentWeatherMinTemp(resp.main.temp_min);
          setCurrentWeatherMaxTemp(resp.main.temp_max);
          console.log("default local weather", resp);
        }
      } catch (error) {
        console.log(error);
      }
    };
    localWeather();
  }, []);

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

          <DefaultWeather
            idd={iconId}
            tempp={tempp}
            weatherData={weatherData}
            currentWeatherIcon={currentWeatherIcon}
            currentWeatherTemp={currentWeatherTemp}
            currentWeatherMinTemp={currentWeatherMinTemp}
            currentWeatherMaxTemp={currentWeatherMaxTemp}
          />
        </div>

        {/* section two */}

        <div className="col-7">
          {/* <h3>i'm section two here</h3> */}
          <div className="row">
            {weatherData && (
              <h4 style={{ marginBottom: "20px" }}>
                Weather in {weatherData.city.name}
              </h4>
            )}
            {weatherData &&
              weatherData.list
                .slice(0, 6)
                .map((data) => <Weather key={data.id} d={data} />)}
          </div>

          {weatherData && <h2>{weatherData.name}</h2>}
        </div>
      </div>
    </div>
  );
}
