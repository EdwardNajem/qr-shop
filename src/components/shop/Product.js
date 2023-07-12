import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import accounts from '../accounts/accounts';
import { ShopContext } from '../context/shop-context';

function Product(props) {
  const navigate = useNavigate();
  const { id, thumb, product_name, price, description, currency, owner } =
    props.data;
  const { cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const ownerAccount = accounts.find((account) => account.accid === owner);
  const ownerid = ownerAccount
    ? ownerAccount.accfirstname + ' ' + ownerAccount.acclastname
    : '';

  let path = '/buy/' + id;

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
        <button className="btn">View Offer</button>
      </div>
    </div>
  );
}

export default Product;
