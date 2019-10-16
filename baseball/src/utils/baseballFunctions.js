import React from "react";

//  By exporting a function I am able to contain functional scope to retain state
export const BaseballFunctions = () => {
  const [strikes, setStrikes] = React.useState(0);
  const [balls, setBalls] = React.useState(0);

  const reset = () => {
    setStrikes(0);
    setBalls(0);
  };

  const hit = () => {
    reset();
  }

  const foul = () => {
    if (strikes < 2) setStrikes(strikes + 1);
  };

  const strike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      reset();
    }
  };

  const ball = () => {
    if (balls > 2) {
      reset();
    } else {
      setBalls(balls + 1);
    }
  };
  return { strikes, balls, reset, foul, strike, ball, hit };
}
