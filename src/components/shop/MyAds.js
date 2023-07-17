import React from 'react';
import { useParams } from 'react-router-dom';
import MyProduct from './MyProduct';
import product_card from './product_card';
import './shop.css';

const MyAds = () => {
  const { id } = useParams();
  console.log(product_card);
  const listItems = product_card.map((item) => {
    if (String(item.owner) === id) {
      return <MyProduct data={item} />;
    }
  });
  return (
    <>
      <div className="main_content">{listItems}</div>
    </>
  );
};

export default MyAds;
