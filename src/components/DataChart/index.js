import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Wrapper, CityName, Chart } from "./styles";
import { color } from "../../utils/colorMapping";

const DataChart = ({ cityData }) => {
  const { darkGreen, lightGreen, yellow, orange, darkRed, lightRed } = color;
  return (
    <Wrapper>
      <Chart>
        <ReactSpeedometer
          minValue={0}
          maxValue={500}
          value={cityData}
          segments={6}
          segmentColors={[
            darkGreen,
            lightGreen,
            yellow,
            orange,
            darkRed,
            lightRed,
          ]}
          customSegmentStops={[0, 50, 100, 200, 300, 400, 500]}
        />
        <CityName>Mumbai</CityName>
      </Chart>
    </Wrapper>
  );
};

export default DataChart;
