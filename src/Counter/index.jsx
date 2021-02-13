import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

Counter.propTypes = {};

function Counter(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  const handleIncreaseClick = () => {
    const action = increase(123); // 123 is payload
    dispatch(action);
    console.log(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease(123); // 123 is payload
    dispatch(action);
    console.log(action);
  };

  return (
    <div>
      <div>Count is: {counter}</div>
      <div>
        <button onClick={handleIncreaseClick}>Increase </button>
        <button onClick={handleDecreaseClick}>Decrease </button>
      </div>
    </div>
  );
}

export default Counter;
