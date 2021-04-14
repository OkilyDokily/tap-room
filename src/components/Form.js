import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'

Form.propTypes = {
  edit: PropTypes.object,
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

  const formStyle = {
    margin: "auto",
    textAlign: "center"
  }

  const kegAddEditButton ={
    width: "192px",
    marginTop:"16px",
    padding: "10px"
  }

  return (

    <form style={formStyle} onSubmit={addKeg}>
      <input placeholder="Name" type="text" id="name" defaultValue={props.edit.edit ? props.edit.details.name : null} />
      <input placeholder="Brand" type="text" id="brand" defaultValue={props.edit.edit ? props.edit.details.brand : null} />
      <input placeholder="Price" type="number" step="0.01" id="price" defaultValue={props.edit.edit ? props.edit.details.price : null} />
      <input placeholder="Alcohol Content" type="number" step="0.01" id="alcoholcontent" defaultValue={props.edit.edit ? props.edit.details.alcoholContent : null} />

      <input style={kegAddEditButton} type="submit" id="kegs" value={props.edit.edit ? "Edit Keg" : "Add Keg"} />
    </form>

  );
}

export default Form;