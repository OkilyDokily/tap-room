import React from 'react';
import PropTypes from 'prop-types';

TapItem.propTypes = {
  details: PropTypes.object,
};

function TapItem(props) {
  return (
    <div onClick={() => props.showDetails(props.details.id)}>
      <p>{props.details.name}</p>
      <p>{props.details.brand}</p>
      <p>{props.details.price}</p>
      <p>{props.details.alcoholContent}</p>
    </div>
  );
}

export default TapItem;