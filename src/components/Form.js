import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'

Form.propTypes = {
  edit:PropTypes.object,
  onAddKegs: PropTypes.func
};



function Form(props) {

  const addKeg = (e) => {
    e.preventDefault();
    let obj =
    {
      id: (props.edit.edit) ? props.edit.details.id : v4(),
      name: document.getElementById("name").value,
      brand: document.getElementById("brand").value,
      price: parseFloat(document.getElementById("price").value),
      alcoholContent: parseFloat(document.getElementById("alcoholcontent").value),
      pints: 124,
    }
    if (props.edit.edit) {
      props.onEditKeg(obj)
    }
    else {
      props.onAddKeg(obj);
    }
  }
  return (
    <div>
      <form onSubmit={addKeg}>
        <div >
          <label>Name</label>
          <input type="text" id="name" defaultValue={props.edit.edit ? props.edit.details.name : null} />
        </div>
        <div >
          <label>Brand</label>
          <input type="text" id="brand" defaultValue={props.edit.edit ? props.edit.details.brand : null} />
        </div>
        <div >
          <label>Price</label>
          <input type="number" step="0.01" id="price" defaultValue={props.edit.edit ? props.edit.details.price : null} />
        </div>
        <div >
          <label>Alcohol Content</label>
          <input type="number" step="0.01" id="alcoholcontent" defaultValue={props.edit.alcoholContent ? props.edit.details.name : null} />
        </div>
        <input type="submit" id="kegs" value={props.edit.edit ? "Edit Keg" : "Add Keg"} />
      </form>
    </div>
  );
}

export default Form;