import React from "react";
import { CustomSvg } from "./CustomSvg";
import { Box, Container } from "@material-ui/core";
import styles from "../styles";

export default function Task() {
  const [value, setValue] = React.useState(0);
  const [svgArray, setSvgArray] = React.useState([]);

  const handleClick = () => {
    if (value < 0 || value === "" || value === "0") {
      alert("Invalid Input");
    } else {
      setSvgArray([]);
      for (let i = 0; i < value; i++) {
        setSvgArray((svgArray) => [...svgArray, <CustomSvg />]);
      }
    }
  };

  return (
    <Container>
    <p style={styles.container}>
        <input
          type="number"
          style={styles.styleInput}
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button style={styles.styleBtn} onClick={handleClick}>
          Load
        </button>
      </p>

      <Box style={{textAlign:"left"}}>
      {svgArray.map((svg) => {
        return svg;
      })}
    </Box>
     
     
    </Container>
  );
}
