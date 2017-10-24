import React, { Component } from 'react';
import './App.css';
import Store from './Store.js';
import Contact from './Contact.js';
import Cart from './Cart.js';
import largeRoll from './images/largeRoll.jpg';
import bunIcon from './images/bun.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }


  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Store/>
    if(this.state.page === 1)
      return <Contact/>
    if(this.state.page === 2)
      return <Cart/>
  }


  render() {
    return (
      <div className="App">
        <img src={largeRoll} className="App-largeDogCookieImage" alt="pan of cinnamon rolls" />
        <div className = "App-background" />
        <div className = "App-content">
          <div className = "App-navMenu">
            <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>Shop</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} > Contact</div>
            <div className = {"App-navMenu-button" + (this.state.page === 2 ? " active" : "")} onClick={(ev) => this.setState({page: 2})} id = "cartCount" > Cart (0) </div>
          </div>

          <header className="App-header">
            <h1 className="App-title">Bun Bun Bake Shop</h1>
            <p className="App-intro">
              Bun Bun Bake Shop is a small bakery in Shadyside that bakes speciality cinnamon rolls. We are known not only for our classic cinnamon roll, but for a variety of artisan flavored rolls we love concocting in our kitchen.
            </p>
          </header>
          {this.renderPageView()}
        </div>
      </div>
    );
  }
}

export default App;
