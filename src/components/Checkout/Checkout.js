import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate
import { useDispatch } from 'react-redux';
import { clearCart } from '../cartSlice/cartSlice'; 

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    address: '',
    paymentMethod: 'COD',
  });
  const navigate = useNavigate(); // Updated to useNavigate
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = Math.floor(100000000 + Math.random() * 900000000);
    dispatch(clearCart());
    navigate(`/order-confirmation/${orderId}`); // Updated to navigate
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block">Number</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block">Payment Method</label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={formData.paymentMethod === 'COD'}
                onChange={handleChange}
              />{' '}
              COD
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Online Payment"
                checked={formData.paymentMethod === 'Online Payment'}
                onChange={handleChange}
              />{' '}
              Online Payment
            </label>
          </div>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
