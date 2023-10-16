import { Component } from "react";
import PropTypes from "prop-types";
import "./search-bar.styles.css"


class SearchBar extends Component {

    render() {

        return(
            <div>
                <input type="search" name="search" className={`search__input ${this.props.className}`} id="search__input" placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} />

            </div>
        );
    }
}

export default SearchBar;

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    className: PropTypes.string
};