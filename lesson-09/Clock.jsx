import React from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button";
const root = document.getElementById("root");

class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "en-US",
  };
  timeIntervale;
  componentDidMount() {
    this.timeIntervale = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeIntervale);
    console.log("intervale is cleared");
  }
  handleClick = (locale) => {
    console.log("state is updated", locale);
    this.setState({
      locale: locale,
    });
  };
  render() {
    const { date, locale } = this.state;
    return (
      <div className="m-5">
        <p className="text-3xl font-bold">{date.toLocaleTimeString(locale)}</p>
        <Button
          change={this.handleClick}
          locale={locale === "en-US" ? "bn-BD" : "en-US"}
        />
      </div>
    );
  }
}
createRoot(root).render(<Clock />);
