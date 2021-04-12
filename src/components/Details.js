import React from 'react';
import PropTypes from 'prop-types';

Details.propTypes = {
  details:PropTypes.object,
};

function Details(props) {
  return (
    <div>
      <div>
        <p>{props.details.name}</p>
        <p>{props.details.brand}</p>
        <p>{props.details.price}</p>
        <p>{props.details.alcoholContent}</p>
        <p>{(props.details.pints <= 0) ? "Out Of Stock" : ("pints: " + props.details.pints)}</p>
      </div>
      <div>
        <button onClick={() => props.onEdit("Edit")}>Edit</button>
      </div>
    </div>

  );
}

export default Details;