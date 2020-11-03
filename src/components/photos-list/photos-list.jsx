import React from "react";
import PropTypes from "prop-types";

const PhotosList = (props) => {
  const {photos} = props;
  return (
    <div className="property__gallery">
      {photos.map((photo) =>
        <div key={photo} className="property__image-wrapper">
          <img className="property__image" src={photo} alt="Photo studio"/>
        </div>
      )}
    </div>
  );
};

PhotosList.propTypes = {
  photos: PropTypes.arrayOf(String)
};

export default PhotosList;
