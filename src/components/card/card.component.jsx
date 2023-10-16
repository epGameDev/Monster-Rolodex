import { Component } from "react";
import PropTypes from "prop-types";


import "./card.styles.css"

class Card extends Component {
  render() {
    const {name, email, id} = this.props;

    return (

        <div className="container__card">
          <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt={`monster image of ${name}`}
          />

          <h2>{name}</h2>
          <p>Email: {email}</p>
        </div>
    );
  }
}

export default Card ;

Card.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
