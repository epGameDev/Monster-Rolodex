import { Component } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {firstName: "Eric", lastName: "Philippot"},
    }
  }

  render() {
    return (
      <div>
        <img src={viteLogo} className="logo" alt="vite logo" />

        <p>Hello {this.state.name.firstName} {this.state.name.lastName}</p>

        <button onClick={ () => {
          this.setState(() => {
            return {
              name: {firstName: "Bogie", lastName: "Bear" }
            }
          }, () => console.log(this.state))
        }}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
