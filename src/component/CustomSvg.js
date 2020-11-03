import React from "react";
import { getRandomNum, valueToColor } from "../utils";

export function CustomSvg() {
  const randomInt = getRandomNum(-100, 100);
  return (
    <svg style={{ margin: "5px", borderRadius: "4px" }} width="35" height="35">
      <rect
        x="0"
        y="0"
        width="35"
        height="35"
        
        fill={valueToColor(randomInt)}
      />
      <text fill={"white"} x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
        {randomInt}
      </text>
    </svg>
  );
}
