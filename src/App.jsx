import { Component } from "react";
// import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: "",
    };

    console.log("Constructor Initialized");
  }

  componentDidMount() {
    console.log("Component Mounted");
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
      .catch((error) =>
        console.log("Oops, There is an error in App.js, line 15 -26", error)
      );
  }

  onInputChange = (event) => {
    const searchInput = event.target.value.toLowerCase();
    this.setState( () => {
      return { searchInput };
    })
  }

  render() 
  {
    console.log("Rendering Dom");

    const { monsters, searchInput } = this.state
    const { onInputChange } = this;
    
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchInput);
    });


    return (
      <div>
        <input type="search" name="search" id="search__input" placeholder="Search Monsters" onChange={onInputChange} />

        {filteredMonsters.map((monster) => {
          return (
            <h3 key={monster.id}> {monster.name} {monster.email} </h3>
          );
        })}
      </div>
    );
  }
}

export default App;
