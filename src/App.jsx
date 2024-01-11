import { Component } from "react";
import CardList  from "./components/card-list/card-list.component"
import SearchBar from "./components/search-bar/search-bar.component";
// import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: "",
    };

  }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
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
    const { monsters, searchInput } = this.state
    const { onInputChange } = this;
    
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchInput);
    });


    return (
      <div>
        <h1 className="app__title">Monster&apos;s Rolodex</h1>
        <SearchBar onChangeHandler={onInputChange} placeholder={"Search Monster"} className={"search__box-monster"}/>

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
