import { Component } from "react";
import PropTypes from "prop-types";

class CardList extends Component {
  render() 
  {
    const { monsters } = this.props;


    return(
        <div>
        {monsters.map((monster) => {
          return  <h3 key={monster.id}> {monster.name} {monster.email} </h3>
        })}
        </div>
    );
  }
}

export default CardList;
CardList.propTypes = {
    monsters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
};
