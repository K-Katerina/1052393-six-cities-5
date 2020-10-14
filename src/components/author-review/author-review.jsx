import React from "react";
import {AuthorPropType} from "../../types";

const AuthorReview = (props) => {
  const {author} = props;
  return (
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={author.avatar} width="54"
          height="54"
          alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">
        {author.name}
      </span>
    </div>
  );
};

AuthorReview.propTypes = {
  author: AuthorPropType
};

export default AuthorReview;
