import QrScanner from 'qr-scanner';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../shop/product.css';
import './buy.css';

function Buy() {
  const { id } = useParams();
  const navigate= useNavigate();

  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [filepath, setFilePath] = useState(null);

  const confirmpath = 'http://localhost:3000/generate/' + id;

  const confirmpurchase = () => {
    if(filepath === confirmpath){
      const newpath = "../../../generate/" + id;
      navigate(newpath);
    }
  }

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    const result = await QrScanner.scanImage(file);
    setFilePath(result);
    console.log(result);
  };

  useEffect(() => {
    if (filepath === confirmpath) {
      setData('Qr Code Valid');
    } else {
      setData('Qr Code Invalid');
    }
  }, [filepath]);

  return (
    <div className="card" key={id}>
      <div className="card_seperate">
        <div className="card_header">
          <p>A Qr Code is needed to confirm the purchase</p>
          <img src="/edw.png" alt="Qr Code" />
        </div>
        <div className="card_header">
          <p>{data}</p>
          <hr></hr>
          <form onSubmit={confirmpurchase()}>
            <input
              type="file"
              id="myFile"
              name="filename"
              onChange={handleChange}
              accept=".png, .jpg, .jpeg"
            />
            <button
              className="submit-qr download-qr"
              type='submit'
            >
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Buy;
