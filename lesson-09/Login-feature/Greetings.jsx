import React from "react";
class UserGreeting extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-3xl font-bold">Welcome back!</h2>
      </div>
    );
  }
}

class GuestGreeting extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-3xl font-bold">Plese sign up</h2>
      </div>
    );
  }
}

export { UserGreeting, GuestGreeting };
