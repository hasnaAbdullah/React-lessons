const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
function TempInput(props) {
  const { scale, temperature, takeTemp } = props;
  return (
    <div className="border-2 border-orange-400 p-5 rounded-lg">
      <h2 className="mb-2">Enter temperature in {scaleNames[scale]}</h2>
      <input
        className="p-1"
        type="text"
        value={temperature}
        onChange={(e) => takeTemp(e, scale)}
      />
    </div>
  );
}

export default TempInput;
