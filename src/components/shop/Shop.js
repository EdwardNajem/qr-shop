import React from 'react';
import product_card from './product_card';
import './shop.css';
import Product from './Product';

const Shop = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => <Product data={item} />);
  return (
    <>
      <div className="main_content">{listItems}</div>
    </>
  );
};

export default Shop;
