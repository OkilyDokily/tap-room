import React from 'react';
import PropTypes from 'prop-types';
import TapItem from './TapItem'

TapList.propTypes = {
  tapList:PropTypes.arrayOf(PropTypes.object),
  showDetails:PropTypes.func,
};

const tapNames ={
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
}

const tapNamesExtras ={
  borderBottom: "black 1px solid",
  marginBottom:"6px"
}

function TapList(props) {
  return (
    <div>
      <div id="tap-names" class="tap-item-details" style={{...tapNames,...tapNamesExtras}} >
        <div>Name</div>
        <div>Brand</div>
        <div>Price</div>
        <div>Alcohol Content</div>
        <div>Pints Left</div>
      </div>
      {props.tapList.map(x => <TapItem purchasePint={props.onPurchasePint} showDetails= {props.onShowDetails} details = {x}/>)}
    </div>
  );
}

export default TapList;