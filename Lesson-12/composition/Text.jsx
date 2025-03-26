export default function Text({ addEmoji }) {
  let text = "I love javascript programming language since 2022";
  return <div>{addEmoji ? addEmoji(text, "🚀") : text}</div>;
}
