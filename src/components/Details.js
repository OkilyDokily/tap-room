import React from 'react';
import PropTypes from 'prop-types';

Details.propTypes = {
  details:PropTypes.object,
};

function Details(props) {
  return (
    <div>
      <p>{props.details.name}</p>
      <p>{props.details.brand}</p>
      <p>{props.details.price}</p>
      <p>{props.details.alcoholContent}</p>
    </div>
  );
}

export default Details;