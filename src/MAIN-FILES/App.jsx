import Text from "../../Lesson-12/composition/Text";
import Emoji from "../../Lesson-12/composition/Emoji";
function App() {
  return (
    <>
      <Emoji>{(addEmoji) => <Text addEmoji={addEmoji} />}</Emoji>
    </>
  );
}

export default App;
