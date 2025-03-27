import React from "react";

class HoverCounter extends React.Component {
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
        <h2 className="m-5 text-xl " onMouseOver={this.incrementCount}>
          Hovered {count} times
        </h2>
      </div>
    );
  }
}

export default HoverCounter;
