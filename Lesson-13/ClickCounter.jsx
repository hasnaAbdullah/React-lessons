import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          className="m-5 border-2 border-gray-400 rounded-sm py-1 px-4"
          onClick={this.incrementCount}
        >
          Click {count} times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
