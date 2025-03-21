import React from "react";
import { createRoot } from "react-dom/client";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1 className="text-4xl font-bold">
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Clock />);
