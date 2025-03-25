import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

class Form extends React.Component {
  state = {
    library: "Angular",
  };
  changeValue = (e) => {
    this.setState({
      library: e.target.value,
    });
  };
  render() {
    const { library } = this.state;
    return (
      <div>
        <form action="">
          <input
            type="text"
            className="m-4 p-2 text-lg font-semibold border rounded-md focus:outline-2"
            defaultValue="javascript"
            placeholder="hello "
          />
          <br />
          <input
            className="m-4 p-2 text-lg font-semibold border rounded-md focus:outline-2"
            type="password"
            defaultValue="2345"
          />
          <br />
          <input
            type="email"
            className="m-4 p-2 text-lg font-semibold border rounded-md focus:outline-2"
            defaultValue="abd@ctg.com"
            placeholder="enter your mail "
          />
          <br />
          <input className="m-4" type="checkbox" defaultChecked /> <br />
          <textarea
            className="m-4 p-2 text-lg font-semibold border rounded-md focus:outline-2"
            defaultValue={"javascript is beautiful"}
          />
          <br />
          <select
            value={library}
            className="m-4 p-2 text-lg font-semibold border rounded-md focus:outline-2"
            onChange={this.changeValue}
          >
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </form>
      </div>
    );
  }
}

root.render(<Form />);
