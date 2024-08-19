import React from "react";
import "./CityList.css";

const CityList = ({
  setSearch,
  setCityCoords,
  searchResult,
  setEnableForecast,
}) => {
  const buttonHandler = (city, lat, lng) => {
    setEnableForecast(true);

    setCityCoords({ lat, lng });
    setSearch(city);
  };

  return (
    <div className="city_list">
      {searchResult.map((result, id) => {
        return (
          <div key={id}>
            <button
              className="city_button"
              onClick={() => buttonHandler(result.city, result.lat, result.lng)}
            >
              {result.city}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
