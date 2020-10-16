import React from "react";
import {OwnerPropType} from "../../types";

const Owner = (props) => {
  const {owner} = props;
  return (
    <div className="property__host-user user">
      <div className={`jsx-avatar__owner property__avatar-wrapper user__avatar-wrapper ${owner.isSuper ? `property__avatar-wrapper--pro` : ``}`}>
        <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74"
          alt="Host avatar"/>
      </div>
      <span className="property__user-name">
        {owner.name}
      </span>
    </div>
  );
};

Owner.propTypes = {
  owner: OwnerPropType
};

export default Owner;
