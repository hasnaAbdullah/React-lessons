import React from "react";
class Button extends React.Component {
  render() {
    const { change, locale } = this.props;
    return (
      <>
        <button
          className="my-3 cursor-pointer px-5 py-2 rounded-md bg-gray-200 font-semibold text-lg"
          onClick={() => change(locale)}
        >
          click me
        </button>
      </>
    );
  }
}
export default Button;
