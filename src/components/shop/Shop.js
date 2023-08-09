import React from 'react';
import Product from './Product';
import product_card from './product_card';
import './shop.css';

const Shop = () => {
  const listItems = product_card.map((item) => <Product data={item} />);
  return (
    <>
      <div className="main_content">{listItems}</div>
    </>
  );
};

export default Shop;
