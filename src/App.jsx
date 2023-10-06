import { Component } from "react";
// import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {firstName: "James", lastName: "Sully"},
        {firstName: "Mike", lastName: "Wazowski"},
        {firstName: "Roz", lastName: "Peterson"},

      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.monsters.map((monster) => {
            console.log(<h3 key={monster.id}>{monster.firstName} {monster.lastName}</h3>)
            return <h3 key={monster.id}>{monster.firstName} {monster.lastName}</h3>
          })
        }
      </div>
    );
  }
}

export default App;
