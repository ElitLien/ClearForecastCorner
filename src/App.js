import ForecastTab from "./components/ForecastTab/ForecastTab";
import SearchTab from "./components/SearchTab/SearchTab";
import SkyBox from "./components/SkyBox/SkyBox";
import Points from "./components/Points/Points";
import CameraController from "./components/CameraController/CameraController";
import Earth from "./Earth";

import "./App.css";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  const [search, setSearch] = useState("");
  const [enableForecast, setEnableForecast] = useState(false);
  const [cityCoords, setCityCoords] = useState({ lat: null, lng: null });

  return (
    <div className="App">
      <SearchTab
        setSearch={setSearch}
        setEnableForecast={setEnableForecast}
        setCityCoords={setCityCoords}
      />
      <ForecastTab
        search={search}
        enableForecast={enableForecast}
        setEnableForecast={setEnableForecast}
      />
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={true} />
        <SkyBox/>
        <CameraController position={cityCoords} />
        {cityCoords.lat !== null && cityCoords.lng !== null && (
          <Points
            color="red"
            latitude={cityCoords.lat}
            longitude={cityCoords.lng}
          />
        )}
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

export default App;
