
import PropTypes from "prop-types";


import "./card.styles.css"

const Card = ( props ) => {
  const {name, email, id} = props;

  return (

      <div className="container__card">
        <img
          src={`https://robohash.org/${id + 1}?set=set2&size=180x180`}
          alt={`monster image of ${name}`}
        />

        <h2>{name}</h2>
        <p>Email: {email}</p>
      </div>
  );
}

export default Card ;

Card.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
