import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';


class HomePage extends Component {
    //renders data to the DOM
  render() {
    const handleOnDragStart = e => e.preventDefault()
    return (
      <AliceCarousel mouseDragEnabled >
        <img src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000214591_sd.jpg;maxHeight=200;maxWidth=200" onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000214591_sd.jpg;maxHeight=200;maxWidth=200" onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000214591_sd.jpg;maxHeight=200;maxWidth=200" onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000214591_sd.jpg;maxHeight=200;maxWidth=200" onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000214591_sd.jpg;maxHeight=200;maxWidth=200" onDragStart={handleOnDragStart} className="yours-custom-class" />
      </AliceCarousel>
    )
  }
}

export default HomePage;