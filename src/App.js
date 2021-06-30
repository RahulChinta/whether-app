import { useState, Fragment } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import UserInput from "./components/UserInput/UseInput";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = () => {
  const [showError, setShowError] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const setWeatherData = (wheatherData) => {
    const temp = wheatherData.main.temp;
    const wheatherDescription = wheatherData.weather[0].description;
    const iconName = wheatherData.weather[0].icon;
    const cityName = wheatherData.name;
    setWeatherInfo({ temp, wheatherDescription, iconName, cityName });
  };

  const submitHandler = async (cityName) => {
    if (cityName.trim() === "") {
      setShowError(true);
      setWeatherInfo(null);
      return;
    }
    setShowError(false);
    setLoading(true);
    try {
      const response = await fetch(`/city/${cityName}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setShowError(true);
      console.error(err);
    }
    setLoading(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather APP</h1>
      </header>
      <UserInput onSubmit={submitHandler} />
      {loading && (
        <Fragment>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          <p>Loading, Please wait...</p>
        </Fragment>
      )}
      {showError && (
        <p className="error-text">Please enter a valid city name</p>
      )}
      {!loading && !showError && weatherInfo && (
        <WeatherInfo
          temp={weatherInfo.temp}
          description={weatherInfo.wheatherDescription}
          icon={weatherInfo.iconName}
          cityName={weatherInfo.cityName}
        />
      )}
    </div>
  );
};

export default App;
