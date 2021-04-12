import React from 'react';
import PropTypes from 'prop-types';

TapItem.propTypes = {
  details: PropTypes.object,
};

function TapItem(props) {
  return (
    <div >
      <div onClick={() => props.showDetails(props.details.id)}>
        <p>{props.details.name}</p>
        <p>{props.details.brand}</p>
        <p>{props.details.price}</p>
        <p>{props.details.alcoholContent}</p>
        <p>{(props.details.pints <= 0) ? "Out Of Stock" : ("pints: " + props.details.pints)}</p>
      </div>
      <div>
        <button onClick={() => props.purchasePint(props.details.id)}>Purchase Pint</button>
      </div>
    </div>
  );
}

export default TapItem;