import Text from "../../Lesson-12/composition/Text";
import Emoji from "../../Lesson-12/composition/Emoji";
import Bracket from "../../Lesson-12/composition/Bracket";
function App() {
  return (
    <>
      <Emoji>
        {(addEmoji) => (
          <Bracket>
            {(addBracket) => (
              <Text feature={{ addEmoji: addEmoji, addBracket: addBracket }} />
            )}
          </Bracket>
        )}
      </Emoji>
    </>
  );
}

export default App;
