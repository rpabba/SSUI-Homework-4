import React, { Component } from 'react';
import './App.css';

import roll1 from './images/roll1.jpg';
import roll2 from './images/roll2.jpg';



class About extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3> Visit us in Shady Side! </h3>
         <p> 12345 Baker St. Pittsburgh PA, 12345 </p>
         <p> Mon - Fri 6:00AM - 3:00PM</p>
         <p> Sat - Sun 8:00AM - 5:00PM</p>
         <p> Phone Number: 293-234-2341</p>


        <p className="App-aboutUs">
         <h3> A little bit about us... </h3>
          We started out in early August in 2012 with a passion for cinnamon rolls and love for new tastes. Our goal is to bring new flavors to a classic favorite, and that’s why we spend so much time coming up with new flavors that we think you will enjoy. Three years later we were getting more orders than we could handle and people from all around the country started to crave our rolls. That’s when we finally extend our business online, and now we are shipping our flavorful rolls to crazed lovers across the country. Make sure to drop by our store, or send some of our rolls to your friends and family!
        </p>
        <img src={roll1} className="App-aboutDog" alt="cinnamon roll 1" />
        <img src={roll2} className="App-aboutDog" alt="cinnamon roll 2" />
      </div>
    );
  }
}


export default About;
