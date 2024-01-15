import { useEffect, useState } from "react";

import CardList  from "./components/card-list/card-list.component"
import SearchBar from "./components/search-bar/search-bar.component";

// import viteLogo from "/vite.svg";
import "./App.css";


const App = () => {
  // Setting state values...
  const [inputValue, setInputValue] = useState("");
  const [monstersArray, setMonsterArrayValue] = useState([]);
  const [filteredMonstersArray, setFilteredMonsterValue] = useState(monstersArray);

  // Fetching Monsters API, second argument is empty as to supply no dependencies, thwarting another fetch call...
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((monster) => setMonsterArrayValue(monster));
    console.log("API Call");
  }, []);

  // Creating filtered array as to not modify original array...
  useEffect(() => {
    const filteredMonsters = monstersArray.filter(monster => monster.name.toLowerCase().includes(inputValue));
    setFilteredMonsterValue(filteredMonsters);
  }, [monstersArray, inputValue]);

  // Grabbing input from <SearchBar /> to filter array...
  const onInputChange = event => {
    const searchInput = event.target.value.toLowerCase();
    setInputValue(searchInput);
  }

  return (
    <div>
      <h1 className="app__title">Monster&apos;s Rolodex</h1>
      <SearchBar onChangeHandler={onInputChange} placeholder={"Search Monster"} className={"search__box-monster"}/>

      <CardList monsters={filteredMonstersArray} />
    </div>
  );
}

export default App;
