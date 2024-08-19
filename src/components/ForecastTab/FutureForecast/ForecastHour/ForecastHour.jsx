import "./ForecastHour.css";
import waterDrop from "../../../Icons/water_drop.png";

const ForecastHour = ({ hourData, getIcon }) => {
  return (
    <div className="forecast_hour">
      <div>{hourData.time.split(" ")[1]}</div>
      <div>{hourData.temp_c + "°"}</div>
      <img
        className="icon"
        src={getIcon(hourData.condition.text.trim())}
        alt=""
      />
      {hourData.chance_of_rain + "%"}
      <img className="icon" src={waterDrop} alt="" />
    </div>
  );
};

export default ForecastHour;
