const ApiKey = "f0fa9328c815f640acdbf481a0f33916";

export const searchWeatherByCity = async (query) => {
  try {
    const resp = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${ApiKey}`
    );
    if (resp.ok) {
      const data = await resp.json();
      console.log("weather data----->", data);
      return data;
    }
  } catch (error) {}
};

export const getWeather = async () => {
  try {
    const resp = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=rome&appid=${ApiKey}`
    );
    if (resp.ok) {
      const data = await resp.json();
      console.log("default local weather", data);
      return data;
    }
  } catch (error) {}
};

export const iconFinder = (idd) => {
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
    return <i id="icon_" className="wi wi-windy  display-1"></i>;
  }
  // switch (true) {
  //   case (idd >= 200) & (idd <= 232):
  //     // setSetIcon(" wi-day-lightning");
  //     return <i className="wi wi-day-lightning  display-1"></i>;
  //   case (idd >= 300) & (idd <= 321):
  //     // setSetIcon("wi-day-rain");
  //     return <i className="wi wi-day-rain  display-1"></i>;
  //   case (idd >= 500) & (idd <= 531):
  //     // setSetIcon("wi-day-rain");
  //     return <i className="wi wi-day-rain  display-1"></i>;
  //   case (idd >= 600) & (idd <= 622):
  //     // setSetIcon("wi-day-snow-wind");
  //     return <i className="wi wi-day-snow-wind  display-1"></i>;
  //   case (idd >= 701) & (idd <= 781):
  //     // setSetIcon("wi-windy");
  //     return <i className="wi wi-windy  display-1"></i>;
  //   case ((idd >= 801) & (idd <= 804)):
  //     // setSetIcon("wi-smog");
  //     return <i className="wi wi-smog  display-1"></i>;
  //   default:
  //     return (
  //       <i
  //         style={{ marginTop: "10px", marginBottom: "10px" }}
  //         className="wi wi-windy  display-1"
  //       ></i>
  //     );
  // }
};
