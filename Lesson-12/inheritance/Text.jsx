import Emoji from "./Emoji";

export default class Text extends Emoji {
  constructor() {
    super();
  }
  render() {
    const decoratedText = this.addEmoji(
      "I love javascript programming language",
      "🚀"
    );
    return super.render(decoratedText);
    {
      /* return (
      <div>
        <h2>"I love javascript programming language",
      "🚀"</h2>
      </div>
    ); */
    }
  }
}
