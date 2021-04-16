import React, { Component } from 'react'
import TapList from './TapList'
import Details from './Details'
import Form from './Form'
import Modal from 'react-modal';

export default class Controller extends Component {
  constructor() {

    let obj = {
      id: 1,
      name: "Sam Goody",
      brand: "Excellence",
      price: 6.95,
      alcoholContent: .85,
      pints: 124
    }

    let obj2 = {
      id: 2,
      name: "Caviar Island",
      brand: "Partition",
      price: 8.95,
      alcoholContent: .90,
      pints: 124
    }
    super()
    this.state = {
      tapList: [{ ...obj }, { ...obj2 }],
      details: null, //object
      currentView: "TapList",
      isOpen: false
    }
  }

  handleShowDetails = (id) => {
    const result = this.state.tapList.filter(x => x.id === id)[0];
    this.setState({ details: result });
    this.setState({ currentView: "Details" });
  }

  handleAddKeg = (tap) => {
    this.state.tapList.push(tap);
    this.setState({ tapList: this.state.tapList });
    this.setState({ currentView: "TapList" })
  }

  handleDeleteKeg = (id) => {
    const index = this.state.tapList.findIndex(x => x.id === id);
    let newarr = this.state.tapList.slice();
    newarr.splice(index, 1)
    this.setState({ tapList: newarr })
    this.setState({ currentView: "TapList" })
  }

  handleEditKeg = (tap) => {
    const result = this.state.tapList.find(x => x.id === tap.id);
    Object.assign(result, tap);
    this.setState({ tapList: this.state.tapList })
    this.setState({ currentView: "TapList" })
  }

  changeCurrentView = (view) => {
    this.setState({ currentView: view })
  }

  handlePurchasePint = (id) => {
    const result = this.state.tapList.filter(x => x.id === id)[0];
    result.pints--;
    if (result.pints < 0) {
      result.pints++;
      this.setState({ Pints: result.pints })
      return;
    }
    this.setState({ Pints: result.pints })
  }

  openModal() {
    console.log("opened")
    this.setIsOpen(true);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("afteopenmodal");
  }

  closeModal() {
    this.setIsOpen(false);
  }

  setIsOpen(isOpen) {
    this.setState({ isOpen: isOpen });
  }

  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

    const returnToListButton = {
      display: "block",
      width: "65%",
      height: "80px",
      padding: '0',
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "30px",
      borderRadius: "6px",
      cursor: "pointer",
      backgroundColor: "white"
    }

    const detailsButtons = {
      display: "flex",
      height: "70px",
      marginTop: "15px"
    }

    const editAndDeleteButtons = {
      backgroundColor: "white",
      border: "2px solid gray !important",
      cursor: "pointer",
      borderRadius: "3px"
    }

    const deleteButton = {
      backgroundColor: "#e6dcdc"
    }

    switch (this.state.currentView) {
      case "TapList":
        return (
          <React.Fragment>
            <TapList goToAddForm={this.changeCurrentView.bind(null, "Add")} onPurchasePint={this.handlePurchasePint} onShowDetails={this.handleShowDetails} tapList={this.state.tapList} />
          </React.Fragment>
        )
      case "Details":
        // () => this.handleDeleteKeg(this.state.details.id)
        return (
          <React.Fragment>
            <Details details={this.state.details} onEdit={this.changeCurrentView} />
            <div style={detailsButtons} id="details-buttons">
              <button className="edit-and-delete-buttons" style={editAndDeleteButtons} onClick={() => this.changeCurrentView("Edit")}>Edit Keg</button>
              <button className="edit-and-delete-buttons" id="delete" style={{ ...editAndDeleteButtons, ...deleteButton }} onClick={() => this.openModal()} >Delete Keg</button>
            </div>
            <br />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
            <Modal
              isOpen={this.state.isOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
            >

              {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
              <button onClick={this.closeModal}>close</button>
              <div>Are you sure you want to delete this?</div>
              <form>
                <button>Yes</button>
                <button>No</button>
              </form>
            </Modal>

          </React.Fragment>
        )
      case "Add":
        return (
          <React.Fragment>
            <Form edit={false} onAddKeg={this.handleAddKeg} />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
          </React.Fragment>
        )
      case "Edit":
        return (
          <React.Fragment>
            <Form edit={{ edit: true, details: this.state.details }} onEditKeg={this.handleEditKeg} />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
          </React.Fragment>
        )
      default:
    }
  }
}
