import { Component } from "react";
import PropTypes from "prop-types";

class CardList extends Component {
  render() 
  {
    const { monsters } = this.props;


    return(
        <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h3> {monster.name}</h3>
              {/* <h4> {monster.email} </h4> */}
            </div>
          ) 
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
