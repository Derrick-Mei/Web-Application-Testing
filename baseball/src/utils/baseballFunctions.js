import React from "react";

//  By exporting a function I am able to contain functional scope to retain state
export function baseballFunctions() {
  const [strikes, setStrikes] = React.useState(0);
  const [balls, setBalls] = React.useState(0);

  const reset = () => {
    setStrikes(0);
    setBalls(0);
  };

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
    if (ball > 2) {
      reset();
    } else {
      setBalls(balls + 1);
    }
  };
  return { strikes, balls, reset, foul, strike, ball };
}
