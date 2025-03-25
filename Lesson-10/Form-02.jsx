import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

class Form extends React.Component {
  state = {
    name: "",
    password: "",
  };
  changeValue = (e) => {
    if (e.target.type === "text") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.type === "password") {
      this.setState({
        password: e.target.value,
      });
    }
  };

  showSuccess = (e) => {
    const { password } = this.state;
    e.preventDefault();
    if (password === "12345") {
      Swal.fire({
        title: "Good job!",
        text: "You have Successfully logged in",
        icon: "success",
      });
      this.setState({
        name: "",
        password: "",
      });
    }
  };
  render() {
    const { name, password } = this.state;
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-[400px] lg:flex-row-reverse">
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={this.showSuccess}>
                <label className="fieldset-label">Email</label>
                <input
                  type="text"
                  className="input"
                  onChange={this.changeValue}
                  value={name}
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={this.changeValue}
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

root.render(<Form />);
