import React from 'react';
import PropTypes from 'prop-types';

TapItem.propTypes = {
  details: PropTypes.object,
};


const tapItemDiv = {
  display: "grid",
  width: "100%",
  marginBottom: "4px",
  border:"solid black 1px",
  padding: "4px",
  paddingRight: "0",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
}

const button = {
  display:"block",
  width:"100%",
  marginTop:"-4px",
  marginBottom:"-4px",
  marginRight:"0"
} 

function TapItem(props) {
  return (
    <div >
      <div class="tap-item-details" style={tapItemDiv} onClick={() => props.showDetails(props.details.id)}>
        <div>{props.details.name}</div>
        <div>{props.details.brand}</div>
        <div>{props.details.price}</div>
        <div>{props.details.alcoholContent}</div>
        <div>{(props.details.pints <= 0) ? "Out Of Stock" : ("pints: " + props.details.pints)}</div>
        <button style={button} onClick={(e) => {e.stopPropagation(); props.purchasePint(props.details.id)}}>Purchase Pint</button>
      </div>
     
    </div>
  );
}

export default TapItem;