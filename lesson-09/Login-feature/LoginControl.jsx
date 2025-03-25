import React from "react";
import { createRoot } from "react-dom/client";
import { LoginButton, LogoutButton } from "./LoginOrOutButton";
import { UserGreeting, GuestGreeting } from "./Greetings";
const root = document.getElementById("root");

class LoginControl extends React.Component {
  state = {
    isLoggedIn: true,
  };
  changeStatus = (status) => {
    this.setState({
      isLoggedIn: status,
    });
  };
  render() {
    const { isLoggedIn } = this.state;
    let button;
    if (isLoggedIn) {
      button = (
        <LoginButton
          change={this.changeStatus}
          enable={false}
          logText="Logout"
          greeting={<UserGreeting />}
        />
      );
    } else {
      button = (
        <LoginButton
          change={this.changeStatus}
          enable={true}
          logText="Login"
          greeting={<GuestGreeting />}
        />
      );
    }
    return <div>{button}</div>;
  }
}

createRoot(root).render(<LoginControl />);
