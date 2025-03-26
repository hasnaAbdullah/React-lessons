import React from "react";
import { createRoot } from "react-dom/client";
import BoilingVerdict from "./BoilingVerdict";
import TempInput from "./TempInput";
import { convert, toCelsius, toFahrenheit } from "./Coverter";
const root = createRoot(document.getElementById("root"));

class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };
  takeTemp = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;

    return (
      <div className="m-5 space-y-4 w-96">
        <TempInput scale="c" temperature={celsius} takeTemp={this.takeTemp} />
        <TempInput
          scale="f"
          temperature={fahrenheit}
          takeTemp={this.takeTemp}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
root.render(<Calculator />);
