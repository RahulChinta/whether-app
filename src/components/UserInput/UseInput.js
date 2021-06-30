import { useRef, Fragment } from "react";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const nameInputRef = useRef();

  const updateWeatherClick = (event) => {
    event.preventDefault();
    const cityName = nameInputRef.current.value;
    props.onSubmit(cityName);
  };
  return (
    <Fragment>
      <form className={classes.input} onSubmit={updateWeatherClick}>
        <label htmlFor="name">Enter City Name</label>
        <input id="name" type="text" ref={nameInputRef} />
        <button type="submit">Search</button>
      </form>
    </Fragment>
  );
};

export default UserInput;
