import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-4">Become an insider</h3>
            <p className="text-sm mb-4">Receive exclusive offers, hydration news, and more when you subscribe.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm hover:underline">FAQ</Link></li>
              <li><Link to="/reviews" className="text-sm hover:underline">Reviews</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Email address"
                className="mb-2 py-2 px-3 rounded-md border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/our-story" className="text-sm hover:underline">Our story</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://media.istockphoto.com/id/1347332330/vector/pakistan-3d-rounded-country-flag-button-icon.jpg?s=1024x1024&w=is&k=20&c=YNOvlWIWqM_zALtt967u1XajryvpDH6uDZ933NR0KAI="
              alt="Placeholder Image"
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <p className="text-sm text-center mt-4">Pakistan</p>
            <div className="flex flex-wrap justify-center space-x-2 mt-2">
              <Link to="/terms" className="text-sm hover:underline">Terms</Link>
              <Link to="/privacy" className="text-sm hover:underline">Privacy</Link>
              <Link to="/cookies" className="text-sm hover:underline">Cookies</Link>
              <Link to="/accessibility" className="text-sm hover:underline">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
