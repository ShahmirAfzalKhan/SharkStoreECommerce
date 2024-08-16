import React from 'react';
import { useParams } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
        <p className="text-lg">Your order has been placed successfully.</p>
        <p className="text-lg font-bold">Order ID: {orderId}</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
