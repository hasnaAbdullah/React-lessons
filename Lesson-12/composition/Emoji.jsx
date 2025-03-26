import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render() {
    let text = "I can add emoji on any text ";
    const { children } = this.props;
    if (children) return children(this.addEmoji);

    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  }
}
