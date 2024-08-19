import { useState, useEffect } from "react";
import axios from "axios";
import "./FutureForecast.css";

import ForecastHour from "./ForecastHour/ForecastHour";

const FutureForecast = ({ search, apiKey, weatherIcons }) => {
  const [futureData, setFutureData] = useState(null);

  const fetchForecast = async () => {
    if (search === "") return;
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}&days=3&aqi=no&alerts=no`
      );
      setFutureData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setFutureData({ name: "Not Available" });
    }
  };

  const weatherIconMapping = {
    "Partly Cloudy": weatherIcons.partlyCloudy,
    "Partly cloudy": weatherIcons.partlyCloudy,
    Overcast: weatherIcons.overcast,
    "Patchy rain nearby": weatherIcons.patchyRainNearby,
    "Patchy light drizzle": weatherIcons.patchyLightDrizzle,
    Clear: weatherIcons.clear,
    Sunny: weatherIcons.sunny,
    "Light rain": weatherIcons.lRain,
    "Light rain shower": weatherIcons.lRainShower,
    "Thundery outbreaks in nearby": weatherIcons.thynderyOutbreaks,
    "Light drizzle": weatherIcons.lightDrizzle,
    Cloudy: weatherIcons.cloudy,
    "Moderate or heavy snow showers": weatherIcons.heavySnow,
    "Light snow showers": weatherIcons.lightSnow,
    "Heavy snow": weatherIcons.heavySnow2,
    "Moderate snow": weatherIcons.moderateSnow,
    "Moderate rain": weatherIcons.moderateRain,
    Blizzard: weatherIcons.blizzard,
    "Light sleet": weatherIcons.lightSleet,
    Mist: weatherIcons.mist,
    Fog: weatherIcons.fog,
    "Light sleet showers": weatherIcons.lightSleetShowers,
    "Light freezing rain": weatherIcons.lightFreezingRain,
    "Light snow": weatherIcons.lightSnow2,
  };

  const getIcon = (condition) => weatherIconMapping[condition] || "";

  useEffect(() => {
    fetchForecast();
  }, [search]);

  return (
    <div className="main_block">
      {futureData && (
        <>
          {futureData.name && (
            <div style={{ textAlign: "center" }}>
              This city does not exist!!! Please enter a city name that exists
            </div>
          )}
          {!futureData.name &&
            futureData.forecast &&
            [0, 1, 2].map((dayIndex) => (
              <div key={dayIndex} className={`day_${dayIndex + 1}`}>
                <div className="hour">
                  {futureData.forecast.forecastday[dayIndex].date}
                </div>
                {[6, 12, 18, 22].map((hour) => (
                  <ForecastHour
                    key={hour}
                    hourData={
                      futureData.forecast.forecastday[dayIndex].hour[hour]
                    }
                    getIcon={getIcon}
                  />
                ))}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FutureForecast;
