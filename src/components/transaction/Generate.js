import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { LoginContext } from '../context/login-context';
import product_card from '../shop/product_card';

function Generate() {
  const { getPoints } = useContext(LoginContext);
  const { id } = useParams();
  let productinfo = product_card.find((item) => item.id === Number(id));

  if (!productinfo) {
    return <div>Product not found</div>;
  }

  return (
    <div className="card" key={id}>
      <div className="card_seperate">
        <div className="card_header">
          <h2>Item Purchased</h2>
          <p>{productinfo.product_name}</p>

          <p className="price">
            {productinfo.price}
            <span>{productinfo.currency}</span>
          </p>
        </div>

        <div className="card_header">
          <hr></hr>
          <NavLink className="btn" to="/" onClick={() => getPoints()}>
            Continue Shopping
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Generate;
