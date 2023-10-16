import { Component } from "react";
import PropTypes from "prop-types";
import Card from "../card/card.component";

import "./card-list.styles.css"

class CardList extends Component {
  render() 
  {
    const { monsters } = this.props;
    
    return(
      <div className="card-list">
        {monsters.map((monster) => {
        const {id, name, email} = monster;

          return (
            <div key={id}>
              <Card id={id} name={name} email={email} />
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
