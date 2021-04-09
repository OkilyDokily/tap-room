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
      Pints: 124     
    }

    let obj2 = {
      id:2,
      name: "Caviar Island",
      brand: "Partition",
      price: 8.95,
      alcoholContent: .90
      Pints: 248
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

  addKegs = 

  render() {
    switch (this.state.currentView) {
      case "TapList":
        return (
          <div>
            <TapList onShowDetails = {this.handleShowDetails} tapList={this.state.tapList} />
          </div>
        )
      case "Details":
        return (
          <div>
            <Details details={this.state.details} />
          </div>
        )
      case "Form":
        return (
          <div>
            <Form/>
          </div>
        )
      default:
    }
  }
}
