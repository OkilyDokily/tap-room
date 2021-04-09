import React from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {

};

const addKegs = (e) => {
  e.preventDefaults();
  let obj = 
  {
    name: document.getElementById("id").value,
    brand: document.getElementById("brand").value,
    price: ParseInt(document.getElementById("price").value),
    alcoholContent: ParseInt(document.getElementById("alcoholcontent").value),
    kegs: ParseInt(document.getElementById("kegs").value),
  }
  props.addKegs(obj);
}

function Form(props) {
  return (
    <div>
      <form onSubmit={addKegs}>
        <div id="name">
          <label>Name</label>
          <input type="text" >
        </div>
          <div id="brand">
            <label>Brand</label>
            <input type="text" >
        </div>
            <div id="price">
              <label>Price</label>
              <input type="number" step="0.01">
        </div>
              <div id="alcoholcontent">
                <label>Alcohol Content</label>
                <input type="number" step="0.01">
        </div>
                <div id="kegs">
                  <label>Kegs</label>
                  <input type="number" min="1">
        </div>
                  <input type="submit" value="Add Kegs to database" />
                  </form>
              </div>
  );
}

export default Form;