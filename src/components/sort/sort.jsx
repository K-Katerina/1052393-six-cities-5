import React from "react";
import {SortTypes} from "../../const";
import PropTypes from "prop-types";
import {ActionCreatorForProcess} from "../../store/reducers/app-process/actions";
import {connect} from "react-redux";
import {getSortType, isOpenSortMenu} from "../../store/reducers/app-process/selectors";

const Sort = (props) => {
  const {sortType, isOpenedSortMenu, changeSortType, openSortMenu} = props;

  return (
    <form onClick={() => openSortMenu(!isOpenedSortMenu)} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        &nbsp;{SortTypes[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenedSortMenu && `places__options--opened`}`}>
        {Object.keys(SortTypes).map((type) =>
          <li onClick={() => changeSortType(type)}
            key={type}
            className={`places__option ${sortType === type && `places__option--active`}`}
            data-sort-type={`${type}`} tabIndex="0">{SortTypes[type]}</li>
        )}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  sortType: PropTypes.string,
  onSortTypeChanged: PropTypes.func,
  changeSortType: PropTypes.func,
  openSortMenu: PropTypes.func,
  isOpenedSortMenu: PropTypes.bool
};

const mapStateToProps = (state) => ({
  sortType: getSortType(state),
  isOpenedSortMenu: isOpenSortMenu(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType: (sortType) => dispatch(ActionCreatorForProcess.changeSortType(sortType)),
  openSortMenu: (isOpen) => dispatch(ActionCreatorForProcess.openSortMenu(isOpen))
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
