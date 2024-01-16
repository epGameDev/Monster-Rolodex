import PropTypes from "prop-types";
import "./search-bar.styles.css"


const SearchBar = ({className, placeholder, onChangeHandler}) => {
    return(
        <div>
            <input type="search" name="search" className={`search__input ${className}`} id="search__input" placeholder={placeholder} onChange={onChangeHandler} />

        </div>
    )
}

export default SearchBar;

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    className: PropTypes.string
};