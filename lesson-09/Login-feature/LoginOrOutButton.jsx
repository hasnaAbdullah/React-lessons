import React from "react";
class LoginButton extends React.Component {
  state = {
    greetings: "",
    btnText: "Login",
  };
  showGreeting = () => {
    const { greeting, logText, change, enable } = this.props;
    this.setState({
      greetings: greeting,
      btnText: logText,
    });
    change(enable);
  };
  render() {
    const { greetings, btnText } = this.state;
    return (
      <div>
        {greetings}
        <button
          onClick={this.showGreeting}
          className="px-4 py-2 font-semibold text-lg bg-slate-200 rounded-md
          cursor-pointer m-3
        "
        >
          {btnText}
        </button>
      </div>
    );
  }
}

class LogoutButton extends React.Component {
  render() {
    const { greeting } = this.props;
    return (
      <div>
        <button
          className="px-4 py-2 font-semibold text-lg bg-slate-200 rounded-md
          cursor-pointer m-3
        "
        >
          logTextout
        </button>
      </div>
    );
  }
}

export { LoginButton, LogoutButton };
