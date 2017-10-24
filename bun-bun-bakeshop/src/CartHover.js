import React, { Component } from 'react';
import './App.css';


class DetailItemView extends Component{
  constructor(props) {
    super(props);
  }


  addItem(){

  
    alert("User name is saved");


  }

  render() {
    return (
      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <div className="detailPane-inner">
          <img className="productImage" src={this.props.image} alt={this.props.altText} />
          <div className="productLabel">{this.props.description}</div>
          <div className="productDetail">{this.props.detail}</div>
        <form>
          <p>Quantity:</p>
          <div className="dropDown" >
            <select id="bunCount">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
          <button onClick={this.addItem}>Add to Cart</button>
        </form>
        </div>
      </div>
    );
  }
}


export default DetailItemView;
