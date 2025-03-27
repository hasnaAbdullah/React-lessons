import React from "react";

export default class Bracket extends React.Component {
  addBracket = (text) => `[ ${text} ]`;
  render() {
    let text = "I can add bracket on any text ";
    const { children } = this.props;
    if (children) return children(this.addBracket);

    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  }
}
