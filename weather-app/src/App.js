import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempretureAndDetails from "./components/TempretureAndDetails";
import Forecast from "./components/Forecast";
import { useState } from "react";


function App() {

 
  const[currentData,setCurrentData] = useState("");
  const[dailyData,setDailyData] = useState("");

  return (
    <div className="app">
      <TopButton />
      <Inputs currentData={currentData} setCurrentData={setCurrentData} />
      <TimeAndLocation />
      <TempretureAndDetails />
      <Forecast title="Hourly forecast" />
      <Forecast
        title="Daily forecast"
        dailyData={dailyData}
        setDailyData={setDailyData}
      />
    </div>
  );
}

export default App;
