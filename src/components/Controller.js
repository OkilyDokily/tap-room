import React, { Component } from 'react'
import TapList from './TapList'
import Details from './Details'
import Form from './Form'

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
      id:2,
      name: "Caviar Island",
      brand: "Partition",
      price: 8.95,
      alcoholContent: .90,
      pints: 124
    }
    super()
    this.state = {
      tapList: [{...obj},{...obj2}],
      details: null, //object
      currentView: "TapList"
    }
  }

  handleShowDetails = (id) => {
    const result = this.state.tapList.filter(x => x.id === id)[0];
    this.setState({details:result});
    this.setState({currentView:"Details"});
  }

  handleAddKeg = (tap) => {
    this.state.tapList.push(tap);
    this.setState({tapList: this.state.tapList});
    this.setState({currentView:"TapList"})
  }

  handleDeleteKeg =(id) =>{
    const index = this.state.tapList.findIndex(x => x.id === id);
    let newarr = this.state.tapList.slice();
    newarr.splice(index,1)
    this.setState({tapList:newarr})
    this.setState({ currentView: "TapList" })
  }

  handleEditKeg = (tap) => {
    const result = this.state.tapList.find(x => x.id === tap.id);
    Object.assign(result,tap);
    this.setState({tapList:this.state.tapList})
    this.setState({ currentView:"TapList" })
  }

  changeCurrentView = (view) =>{
    this.setState({currentView:view})
  }

  handlePurchasePint = (id) => {
    const result = this.state.tapList.filter(x => x.id === id)[0];
    result.pints--;
    if(result.pints < 0){
      result.pints++;
      this.setState({ Pints: result.pints })
      return;
    }
    this.setState({Pints:result.pints})

  }

  render() {

    const tapListButton = {
      display:"block",
      width: "100%",
      height: "50px",
      padding:'0',
      marginLeft:"3px",
      marginTop:"20px"
    }

    const detailsButtons = {
      display:"flex",
      height: "30px",
      marginTop: "10px"
    }

    const returnToListButton = {
      display:"block",
      width:"100%"

    }
    switch (this.state.currentView) {
      case "TapList":
        return (
          <div>
            <TapList onPurchasePint={this.handlePurchasePint} onShowDetails = {this.handleShowDetails} tapList={this.state.tapList} />
            <button style={tapListButton} onClick={()=>this.changeCurrentView("Form")}>Add Keg</button>
          </div>
        )
      case "Details":
        return (
          <div>
            <Details details={this.state.details} onEdit={this.changeCurrentView}/>
            <div style={detailsButtons} id="details-buttons">
              <button onClick={() => this.changeCurrentView("Edit")}>Edit</button>
              <button onClick={() => this.handleDeleteKeg(this.state.details.id)}>Delete Keg</button>
            </div>
            <br/>
            <button style={tapListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
          </div>
        )
      case "Form":
        return (
          <div>
            <Form edit={false} onAddKeg={this.handleAddKeg}/>
          </div>
        )
      case "Edit":
        return(
          <div>
            <Form edit={{edit:true,details:this.state.details}} onEditKeg={this.handleEditKeg}/>
          </div>
        )
      default:
    }
  }
}
