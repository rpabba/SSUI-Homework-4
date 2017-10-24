import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import bacon from './images/baconRoll.png';
import blackBerry from './images/blackberryRoll.png';
import butter from './images/buttermilkRoll.png';

import cake from './images/cakeRoll.png'; 
import caramel from './images/caramelRoll.png';
import carrot from './images/carrotRoll.png';

import cranberry from './images/cranberryRoll.png'; 
import lemon from './images/lemonRoll.png';
import maple from './images/mapleRoll.png';

import original from './images/originalRoll.png'; 
import pumpkin from './images/pumpkinRoll.png';
import strawberry from './images/strawberryRoll.png';

import vegan from './images/veganRoll.png';
import walnut from './images/walnutRoll.png';

class Store extends Component{
  constructor(props) {
    super(props);
    var baconRoll = {image: bacon, altText: "Bacon Roll", description: "Bacon Roll $2.37", price: "$2.37", detail:"Bacon rolls are a classic American favorite all year around! Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var blackberryRoll = {image: blackBerry, altText: "Blackberry Roll", description: "Blackberry Roll $2.37", price: "$2.37", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var butterMilkRoll = {image: butter, altText: "Buttermilk Roll", description: "Buttermilk Roll $1.20", price: "$1.20", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}

    var cakeRoll = {image: cake, altText: "Birthday Cake Roll", description: "Birthday Cake Roll $2.99", price: "$2.99", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var caramelRoll = {image: caramel, altText: "Caramel Pecan Roll", description: "Caramel Pecan Roll $2.17", price: "$2.17", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var carrotRoll = {image: carrot, altText: "Carrot Cake Roll", description: "Carrot Cake Roll $2.87", price: "$2.87", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}

    var cranberryRoll = {image: cranberry, altText: "Cranberry Roll", description: "Cranberry Roll $1.37", price: "$1.37", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var lemonRoll = {image: lemon, altText: "Lemon Lavendar Roll", description: "Lemon Lavendar Roll $2.49", price: "$2.49", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var mapleRoll = {image: maple, altText: "Maple Apple Pecan Roll", description: "Maple Apple Pecan Roll $2.65", price: "$2.65", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}

    var originalRoll = {image: original, altText: "Original Cinnamon Roll", description: "Original Cinnamon Roll $1.00", price: "$1.00", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var pumpkinRoll = {image: pumpkin, altText: "Pumpkin Spice Roll", description: "Pumpkin Spice Roll $2.37", price: "$2.37", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var strawberryRoll = {image: strawberry, altText: " Strawberry Rhubarb Roll", description: "Strawberry Rhubarb Roll $2.17", price: "$2.17", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}

    var walnutRoll = {image: walnut, altText: "Walnut Roll", description: "Walnut Roll $3.37", price: "$3.37", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}
    var veganRoll = {image: vegan, altText: "Vegan Roll", description: "Vegan Roll $3.37", price: "$3.37", detail:"Our customers love this roll and we sell out fast, do yourself favor and pick one up as soon as possible!"}    

    this.state = {
      inventory: [baconRoll, blackberryRoll, butterMilkRoll, cakeRoll, caramelRoll, carrotRoll,
      cranberryRoll, lemonRoll, mapleRoll, originalRoll, pumpkinRoll, strawberryRoll,
      walnutRoll, veganRoll],
      detail: null,
    }
  }


  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var detailView = <DetailItemView onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} description = {item.description} price = {item.price} detail = {item.detail} />
    this.setState({detail: detailView})
  }


  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }


  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} />)
    }
    return (
      <div>
        {elements}
        {this.renderDetailView()}
      </div>
    )
  }


  render() {
    return (
      this.renderInventory()
    );
  }
}


export default Store;
