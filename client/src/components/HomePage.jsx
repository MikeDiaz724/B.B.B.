import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class HomePage extends Component {

  render() {
    return (
      <div style={{ width: "60%", margin: "auto"}}>
        <Carousel >
          <img src="https://i.imgur.com/x9kgxN3.jpg" />
          <img src="https://i.imgur.com/x9kgxN3.jpg" />
          <img src="https://i.imgur.com/x9kgxN3.jpg" />
          <img src="https://i.imgur.com/x9kgxN3.jpg" />
          <img src="https://i.imgur.com/x9kgxN3.jpg" />
        </Carousel>
      </div>      
    );
  }
};

export default HomePage;