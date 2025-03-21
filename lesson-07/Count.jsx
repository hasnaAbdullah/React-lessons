import React from "react";
import { createRoot } from "react-dom/client";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      name: "akij",
    };
  }
  changeCount() {
    const arr = ["mango", "apple", "orange"];
    this.setState({
      count: [...arr],
    });
  }
  render() {
    return (
      <div>
        <button
          className="py-3 px-5 bg-gray-200 font-bold cursor-pointer m-4 text-lg rounded-md "
          onClick={() => this.changeCount()}
        >
          count {this.state.count.join()}
        </button>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Clock />);
