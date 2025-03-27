export default function Text({ feature }) {
  console.log(feature);
  const { addEmoji, addBracket } = feature;
  let text = "I love javascript programming language since 2022";
  if (addEmoji) {
    text = addEmoji(text, "🚀");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
}
