import classes from "./Weather.module.css";

const WeatherInfo = (props) => {
  const iconName = props.icon;
  const imageUrl = `http://openweathermap.org/img/wn/${iconName}@4x.png`;
  return (
    <div className={classes.weather}>
      <h1>{props.cityName}</h1>
      <div>
        <img src={imageUrl} alt="Weather" />
      </div>
      <div className={classes.temp}>
        {props.temp}
        <sup>
          <span>&#176;</span>
        </sup>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default WeatherInfo;
