import React from 'react';
import PropTypes from 'prop-types';
import TapItem from './TapItem'

TapList.propTypes = {
  tapList:PropTypes.arrayOf(PropTypes.object),
  showDetails:PropTypes.func,
};

function TapList(props) {
  return (
    <div>
      {props.tapList.map(x => <TapItem purchasePint={props.onPurchasePint} showDetails= {props.onShowDetails} details = {x}/>)}
    </div>
  );
}

export default TapList;