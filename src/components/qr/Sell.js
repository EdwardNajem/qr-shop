import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../shop/product.css';
import './buy.css';

function Sell() {
  const { id } = useParams();

  const [qrImageUrl, setQrImageUrl] = useState('');
  const confirmpath = 'http://localhost:3000/generate/' + id;

  useEffect(() => {
    console.log(confirmpath);
    handleSubmit();
  }, [id]);

  const handleSubmit = async (e) => {
    const response = await QRCode.toDataURL(confirmpath);
    setQrImageUrl(String(response));
    console.log(response);
  };

  return (
    <div className="card" key={id}>
      <div className="card_seperate">
        <div className="card_header">
          <p>This QR Code is needed to confirm the transaction</p>
          {qrImageUrl && <img src={qrImageUrl} alt="qr" />}
          <hr></hr>
          <a className="submit-qr anchor-qr" href={qrImageUrl} download={qrImageUrl}>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sell;
