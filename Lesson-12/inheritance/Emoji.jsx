import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render(override) {
    let text = "I love javascript ";
    if (override) text = override;
    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  }
}
