import React from 'react';
import Form from "./Form"
import PropTypes from 'prop-types';

Edit.propTypes = {
  
};

function Edit(props) {
  return (
    <div>
      <Form edit={true} details={props.details}/>
    </div>
  );
}

export default Edit;