import withCounter from "./HOC/withCounter";
const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button
        className="m-5 border-2 border-gray-400 rounded-sm py-1 px-4"
        onClick={incrementCount}
      >
        Click {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
