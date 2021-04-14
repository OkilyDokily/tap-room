import React from 'react';
import PropTypes from 'prop-types';

TapItem.propTypes = {
  details: PropTypes.object,
};


const button = {
  display: "block",
  textAlign:"center",
  justifySelf:"center",
  color:"white",
  backgroundColor:"red",
  userSelect: "none"
}

const div = {
  width: "100%",
}


function TapItem(props) {
  return (
    <React.Fragment>

      <div style={div} onClick={() => props.showDetails(props.details.id)}>{props.details.name}</div>
      <div style={div} onClick={() => props.showDetails(props.details.id)}>{props.details.brand}</div>
      <div style={div} onClick={() => props.showDetails(props.details.id)}>{props.details.price}</div>
      <div style={div} onClick={() => props.showDetails(props.details.id)}>{props.details.alcoholContent}</div>
      <div style={div} onClick={() => props.showDetails(props.details.id)}>{(props.details.pints <= 0) ? "Out Of Stock" : ("pints: " + props.details.pints)}</div>

      <div style={{...div,...button}} onClick={(e) => { e.stopPropagation(); props.purchasePint(props.details.id)}}>
       Purchase Pint
      </div>

    </React.Fragment>
  );
}

export default TapItem;