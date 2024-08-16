import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../cartSlice/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <p>RS {item.price * item.quantity}</p>
              <button
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: RS {totalPrice.toFixed(2)}</h3>
            <Link to="/checkout" className="px-4 py-2 bg-green-500 text-white rounded">
              Proceed
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
