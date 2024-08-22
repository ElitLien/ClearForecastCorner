import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CurrentForecast.css";

import windy from "../../Icons/windy.png";
import humidity from "../../Icons/humidity.png";
import clouds from "../../Icons/clouds.png";

const CurrentForecast = ({ search, apiKey, weatherIcons }) => {
  const [weatherData, setWeatherData] = useState(null);

  const {
    partlyCloudy,
    lightSleet,
    mist,
    moderateRain,
    overcast,
    patchyRainNearby,
    patchyLightDrizzle,
    clear,
    sunny,
    lRain,
    lRainShower,
    thynderyOutbreaks,
    lightDrizzle,
    cloudy,
    heavySnow,
    lightSnow,
    heavySnow2,
    moderateSnow,
    blizzard,
    fog,
    lightSleetShowers,
    lightFreezingRain,
    lightSnow2,
  } = weatherIcons;

  const fetchForecast = async () => {
    if (search === "") {
      return 0;
    }

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setWeatherData({ name: "Not Available" });
    }
  };

  const weatherIconMapping = {
    "Partly Cloudy": partlyCloudy,
    "Partly cloudy": partlyCloudy,
    Overcast: overcast,
    "Patchy rain nearby": patchyRainNearby,
    "Patchy light drizzle": patchyLightDrizzle,
    Clear: clear,
    Sunny: sunny,
    "Light rain": lRain,
    "Light rain shower": lRainShower,
    "Thundery outbreaks in nearby": thynderyOutbreaks,
    "Light drizzle": lightDrizzle,
    Cloudy: cloudy,
    "Moderate or heavy snow showers": heavySnow,
    "Light snow showers": lightSnow,
    "Heavy snow": heavySnow2,
    "Moderate snow": moderateSnow,
    "Moderate rain": moderateRain,
    Blizzard: blizzard,
    "Light sleet": lightSleet,
    Mist: mist,
    Fog: fog,
    "Light sleet showers": lightSleetShowers,
    "Light freezing rain": lightFreezingRain,
    "Light snow": lightSnow2,
  };

  const getIcon = (condition) => weatherIconMapping[condition] || "";

  useEffect(() => {
    fetchForecast();
  }, [search]);

  useEffect(() => {
    console.log("Data: ", weatherData);
  }, [weatherData]);

  return (
    <>
      {weatherData && (
        <>
          {weatherData.name && (
            <div style={{ textAlign: "center", paddingTop: "15px" }}>
              This city does not exist!!! Please enter a city name that exists
            </div>
          )}
          {!weatherData.name && (
            <>
              <div>
                <p className="weather_city_name">
                  {weatherData?.location?.name}
                  {/* <br /> */}
                  {/* {weatherData?.location?.country} */}
                </p>
              </div>
              <div className="current_weather">
                <div className="weather_check">
                  <div className="weather_temp">
                    Temperature:{" "}
                    {Math.round(weatherData?.current?.temp_c) + " °C"}
                  </div>
                  <div className="weather_feels_temp">
                    Feels like:{" "}
                    {Math.round(weatherData?.current?.feelslike_c) + " °C"}
                  </div>
                  <img
                    className="weather_icon"
                    src={getIcon(weatherData?.current?.condition.text.trim())}
                    alt=""
                  />
                </div>
                <div className="weather_humidity">
                  <div className="humidity_percent">
                    Humidity:{" "}
                    {weatherData?.current?.humidity + " %" || "Not specified"}
                  </div>
                  <img className="humidity_icon" src={humidity} alt="" />
                </div>
                <div className="weather_cloudy">
                  <div className="cloudy_percent">
                    Cloudiness:{" "}
                    {weatherData?.current?.cloud + " %" || "Not specified"}
                  </div>
                  <img className="cloudy_icon" src={clouds} alt="" />
                </div>
                <div className="weather_wind">
                  <div className="wind_speed">
                    Wind speed:{" "}
                    {weatherData?.current?.wind_mph + " m/h" || "Not specified"}
                  </div>
                  <div className="wind_direction">
                    Wind direction:{" "}
                    {weatherData?.current?.wind_dir || "Not specified"}
                  </div>
                  <img className="wind_icon" src={windy} alt="" />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CurrentForecast;
