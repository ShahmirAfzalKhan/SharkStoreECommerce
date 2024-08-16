import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from '../../components/searchSlice/searchSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const searchTerm = useSelector((state) => state.search);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold">SHARK</Link>
      </div>

      <div className="hidden md:flex space-x-4">
        <Link to="/home" className="text-lg font-bold">Home</Link>
        <Link to="/tees" className="text-lg font-bold">Tees</Link>
        <Link to="/hoodies" className="text-lg font-bold">Hoodies</Link>
        <Link to="/manga" className="text-lg font-bold">Manga</Link>
        <Link to="/figures" className="text-lg font-bold">Figures</Link>
        <Link to="/games" className="text-lg font-bold">Games</Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Link to="/cart" className="relative">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-lg focus:outline-none">
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col items-center md:hidden">
          <Link to="/home" className="text-lg font-bold p-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/tees" className="text-lg font-bold p-2" onClick={() => setIsMenuOpen(false)}>Tees</Link>
          <Link to="/hoodies" className="text-lg font-bold p-2" onClick={() => setIsMenuOpen(false)}>Hoodies</Link>
          <Link to="/manga" className="text-lg font-bold p-2" onClick={() => setIsMenuOpen(false)}>Manga</Link>
          <Link to="/figures" className="text-lg font-bold p-2" onClick={() => setIsMenuOpen(false)}>Figures</Link>
          <Link to="/games" className="text-lg font-bold p-2" onClick={() => setIsMenuOpen(false)}>Games</Link>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded mt-2 w-11/12"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Link to="/cart" className="relative p-2" onClick={() => setIsMenuOpen(false)}>
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
