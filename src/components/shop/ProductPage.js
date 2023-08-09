import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import accounts from '../accounts/accounts';
import './product.css';
import product_card from './product_card';

function ProductPage() {
  const { id } = useParams();

  const path = 'buy/confirm/' + id;

  let productinfo = product_card.find((item) => item.id === Number(id));

  const ownerAccount = accounts.find(
    (account) => account.accid === productinfo.owner
  );

  if (!productinfo) {
    return <div>Product not found</div>;
  }

  return (
    <div className="card" key={id}>
      <div className="card_img pro_img">
        <img src={productinfo.thumb} alt={productinfo.product_name} />
      </div>
      <div className="card_seperate">
        <div className="card_header">
          <h2>{productinfo.product_name}</h2>
          <p>{productinfo.description}</p>
          <p className="price">
            {productinfo.price}
            <span>{productinfo.currency}</span>
          </p>
        </div>

        <div className="card_header">
          <hr></hr>
          <h3>{ownerAccount.accfirstname + ' ' + ownerAccount.acclastname}</h3>
          <p>Contact: {ownerAccount.accmoc}</p>
          <NavLink className="btn" to={path}>
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
