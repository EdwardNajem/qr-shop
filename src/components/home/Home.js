import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import Product from '../shop/Product';
import product_card from '../shop/product_card';
import './home.css';

function Home() {
  const listItems = product_card.map((item) => <Product data={item} />);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1300, min: 660 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="page-header">
        <h1>Featured Items</h1>
        <Carousel infinite={true} responsive={responsive} className="carousal">
          {listItems}
        </Carousel>
      </div>
      <div className="page-header">
        <h1>More Items</h1>
        <div className="main_content">{listItems}</div>
      </div>
    </>
  );
}

export default Home;
