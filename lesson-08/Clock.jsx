import React from "react";
import { createRoot } from "react-dom/client";

class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "en-US",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  changeClockLanguage(lang) {
    this.setState({
      locale: lang,
    });
  }
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="text-3xl font-semibold m-5">
          {date.toLocaleTimeString(locale)}
        </h1>
        <button
          className="py-3 px-6 rounded-lg bg-slate-200 text-lg font-semibold m-5 cursor-pointer"
          onClick={this.changeClockLanguage.bind(this, "bn-Bd")}
        >
          English to Bengali
        </button>
      </div>
    );
  }
}

const root = document.getElementById("root");
createRoot(root).render(<Clock />);
