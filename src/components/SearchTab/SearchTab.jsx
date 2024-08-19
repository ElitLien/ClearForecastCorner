import React, { useState, useEffect } from "react";
import "./SearchTab.css";
import searchIcon from "../Icons/search2.png";
import cityCoordinates from "../../assets/data/Coordinates.json";
import CityList from "./CityList/CityList";

const SearchTab = ({ setSearch, setEnableForecast, setCityCoords }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        search();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue]);

  const search = () => {
    setSearch(inputValue);
    setEnableForecast(true);

    const city = cityCoordinates.find(
      (c) => c.city.toLowerCase() === inputValue.toLowerCase()
    );
    if (city) {
      setCityCoords({ lat: city.lat, lng: city.lng });
    } else {
      console.error("City not found");
    }

    setInputValue("");
  };

  const searchResult = () => {
    let result = cityCoordinates.filter((item) =>
      item.city.toLowerCase().includes(inputValue.toLowerCase())
    );
    return result.slice(0, 5);
  };

  return (
    <div className="search_tab">
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          opacity: 0.4,
        }}
      >
        <input
          className="city_name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter name of city"
        />
        <div className="city_search" onClick={search}>
          <img className="search_icon" src={searchIcon} alt="" />
        </div>
      </div>
      {inputValue && (
        <CityList
          setSearch={setSearch}
          setCityCoords={setCityCoords}
          searchResult={searchResult()}
          setEnableForecast={setEnableForecast}
        />
      )}
    </div>
  );
};

export default SearchTab;
