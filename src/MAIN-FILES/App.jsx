// import Text from "../../Lesson-12/composition/Text";
// import Emoji from "../../Lesson-12/composition/Emoji";
// import Bracket from "../../Lesson-12/composition/Bracket";
import ClickCounter from "../../Lesson-13/ClickCounter";
import HoverCounter from "../../Lesson-13/HoverCounter";
{
  /* function App() {
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
*/
}

function App() {
  return (
    <>
      <ClickCounter />
      <HoverCounter />
    </>
  );
}
export default App;
