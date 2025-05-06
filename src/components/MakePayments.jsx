import React, { useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const MakePayments = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const product = location.state?.product;

  // Return a message if product data is missing
  if (!product) {
    return (
      <div className="container mt-5">
        <h3 className="text-danger">No product data found. Please go back and select a product.</h3>
      </div>
    );
  }

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");
    setError("");
    setMessage("");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", product.product_cost); // Make sure product_cost is used consistently

      const response = await axios.post("https://falsafa.pythonanywhere.com/api/mpesa_payment", data);
      
      setLoading("");
      setMessage(response.data.message);
    } catch (err) {
      setLoading("");
      setError(err.message);
    }
  };

  return (
    <div className='row justify-content-center mt-6'>
      <h2 className='mt-4'>Make Payments - Lipa na Mpesa</h2>
      <div className='col-md-6 p-4 card shadow'>

        <p className='text-info'>Product name: {product.product_name}</p>
        <p className='text-warning'>Product cost: {product.product_cost}</p>

        <form onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-danger'>{error}</p>
          <p className='text-success'>{message}</p>
          <br />
          <input 
            type="tel" 
            placeholder='254xxxxxxxxxx' 
            required 
            className='form-control' 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
          <br />
          <button type='submit' className='btn btn-dark'>Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default MakePayments;