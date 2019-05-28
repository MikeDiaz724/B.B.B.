import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h2><center>Electronics</center></h2>
        <div style={{ width: "35%", margin: "auto"}}>
          <Carousel >
            <img src="https://i.imgur.com/x9kgxN3.jpg" />
            <img src="https://i.imgur.com/prg5Rno.jpg" />
            <img src="https://i.imgur.com/x9kgxN3.jpg" />
            <img src="https://i.imgur.com/prg5Rno.jpg" />
            <img src="https://i.imgur.com/x9kgxN3.jpg" />
          </Carousel>
        </div>

        <h2><center>Automotive</center></h2>
        <div style={{ width: "35%", margin: "auto" }}>
          <Carousel >
            <img src="https://i.imgur.com/7okyF4q.jpg" />
            <img src="https://i.imgur.com/L07NVYm.jpg" />
            <img src="https://i.imgur.com/7okyF4q.jpg" />
            <img src="https://i.imgur.com/L07NVYm.jpg" />
            <img src="https://i.imgur.com/7okyF4q.jpg" />
          </Carousel>
        </div>

        <h2><center>Jewelery</center></h2>
        <div style={{ width: "35%", margin: "auto" }}>
          <Carousel >
            <img src="https://i.imgur.com/TvjlpIs.jpg" />
            <img src="https://i.imgur.com/QUK6BGz.jpg" />
            <img src="https://i.imgur.com/TvjlpIs.jpg" />
            <img src="https://i.imgur.com/QUK6BGz.jpg" />
            <img src="https://i.imgur.com/TvjlpIs.jpg" />
          </Carousel>
        </div>
        

        <h2><center>Home & Living</center></h2>
        <div style={{ width: "35%", margin: "auto" }}>
          <Carousel >
            <img src="https://i.imgur.com/WZQT8cE.jpg" />
            <img src="https://i.imgur.com/TJ9ua6I.jpg" />
            <img src="https://i.imgur.com/WZQT8cE.jpg" />
            <img src="https://i.imgur.com/TJ9ua6I.jpg" />
            <img src="https://i.imgur.com/WZQT8cE.jpg" />
          </Carousel>
        </div>

        <h2><center>Other</center></h2>
        <div style={{ width: "35%", margin: "auto" }}>
          <Carousel >
            <img src="https://i.imgur.com/KbqpDg4.jpg" />
            <img src="https://i.imgur.com/ZKkP84l.jpg" />
            <img src="https://i.imgur.com/KbqpDg4.jpg" />
            <img src="https://i.imgur.com/ZKkP84l.jpg" />
            <img src="https://i.imgur.com/KbqpDg4.jpg" />
          </Carousel>
        </div>
      </div>
    );
  }
};

export default HomePage;