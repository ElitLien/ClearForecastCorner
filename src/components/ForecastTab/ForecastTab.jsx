import { useState, useEffect } from "react";
import "./ForecastTab.css";
import CurrentForecast from "./CurrentForecast/CurrentForecast";

import partlyCloudy from "../Icons/Partly_cloudy.png";
import lightSleet from "../Icons/light_sleet.png";
import mist from "../Icons/mist.png";
import moderateRain from "../Icons/moderate_rain.png";
import overcast from "../Icons/Overcast.png";
import patchyRainNearby from "../Icons/Patchy_rain_nearby.png";
import patchyLightDrizzle from "../Icons/Patchy_light_drizzle.png";
import clear from "../Icons/Clear.png";
import sunny from "../Icons/sunny.png";
import lRain from "../Icons/light_rain.png";
import lRainShower from "../Icons/light_rain_shower.png";
import thynderyOutbreaks from "../Icons/thyndery_outbreaks.png";
import lightDrizzle from "../Icons/light_drizzle.png";
import cloudy from "../Icons/cloudy.png";
import heavySnow from "../Icons/heavy_snow.png";
import lightSnow from "../Icons/light_snow.png";
import heavySnow2 from "../Icons/heavy_snow2.png";
import moderateSnow from "../Icons/moderate_snow.png";
import blizzard from "../Icons/blizzard.png";
import fog from "../Icons/fog.png";
import lightSleetShowers from "../Icons/light_sleet_showers.png";
import lightFreezingRain from "../Icons/light_freezing_rain.png";
import lightSnow2 from "../Icons/light_snow2.png";
import closeIcon from "../Icons/close.png";

import { apiKey } from "../../secret_credentials";
import FutureForecast from "./FutureForecast/FutureForecast";

const ForecastTab = ({ search, enableForecast, setEnableForecast }) => {
  const [timeStatus, setTimeStatus] = useState("current");

  const weatherIcons = {
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
  };

  return (
    <>
      {enableForecast && (
        <div className="main_tab">
          <div className="close_hover">
            <div
              onClick={() => {
                setEnableForecast(false);
              }}
              className="close_forecast"
            >
              <img className="close_icon" src={closeIcon} alt="" />
            </div>
          </div>
          <div className="time_now">
            <button
              onClick={() => {
                setTimeStatus("current");
              }}
              className="time_button"
            >
              Current
            </button>
            <button
              onClick={() => {
                setTimeStatus("future");
              }}
              className="time_button"
            >
              Future
            </button>
          </div>
          {timeStatus === "current" && (
            <CurrentForecast
              search={search}
              apiKey={apiKey}
              weatherIcons={weatherIcons}
            />
          )}
          {timeStatus === "future" && (
            <FutureForecast
              search={search}
              apiKey={apiKey}
              weatherIcons={weatherIcons}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ForecastTab;
