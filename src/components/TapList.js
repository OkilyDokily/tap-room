import React from 'react';
import PropTypes from 'prop-types';
import TapItem from './TapItem'

TapList.propTypes = {
  tapList: PropTypes.arrayOf(PropTypes.object),
  showDetails: PropTypes.func,
};

const tapList = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 100px 1fr",
  alignItems:"end",
  justifyItems:"start",
  gridAutoRows: "20px",
  gridRowGap:"3px"
}

const bottomLine = {
  width:"100%",
  borderBottom: "1px solid black"
}

const lastBotton = {
  width: "90%",
  borderBottom: "1px solid black"
}

const tapListButton = {
  gridColumn: "1/-1",
  width:"100%"
}

function TapList(props) {
  return (
    <div id="tap-list" className="tap-item-details" style={tapList} >
      <div style={bottomLine}>Name</div>
      <div style={bottomLine}>Brand</div>
      <div style={bottomLine}>Price</div>
      <div style={bottomLine}>Alcohol Content</div>
      <div style={lastBotton}>Pints Left</div>
      <div></div>
      {props.tapList.map(x => <TapItem purchasePint={props.onPurchasePint} showDetails={props.onShowDetails} details={x} />)}
      <button style={tapListButton} onClick={props.goToAddForm}>Add Keg</button>
    </div>
  );
}

export default TapList;