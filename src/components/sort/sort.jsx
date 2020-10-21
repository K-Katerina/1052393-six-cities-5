import React from "react";
import {SortTypes} from "../../const";
import PropTypes from "prop-types";

class Sort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  changeSortType(sortType) {
    this.props.onSortTypeChanged(sortType);
  }

  togglePopup() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const {sortType} = this.props;
    const {isOpen} = this.state;
    return (
      <form onClick={() => this.togglePopup()} className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
        &nbsp;{SortTypes[sortType]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {Object.keys(SortTypes).map((type) =>
            <li onClick={() => this.changeSortType(type)}
              key={type}
              className={`places__option ${sortType === type ? `places__option--active` : ``}`}
              data-sort-type={`${type}`} tabIndex="0">{SortTypes[type]}</li>
          )}
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  sortType: PropTypes.string,
  onSortTypeChanged: PropTypes.func
};

export default Sort;
