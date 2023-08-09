import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyProduct(props) {
  const navigate = useNavigate();
  const { id, thumb, product_name, price, description, currency } = props.data;

  let path = 'confirm/' + id;

  return (
    <div
      className="card"
      key={id}
      onClick={() => {
        navigate(path);
      }}
    >
      <div className="card_img">
        <img src={thumb} alt={product_name} />
      </div>
      <div className="card_header">
        <h2>{product_name}</h2>
        <p>{description}</p>
        <p className="price">
          {price}
          <span>{currency}</span>
        </p>
        <button className="btn">Sell Product</button>
      </div>
    </div>
  );
}

export default MyProduct;
