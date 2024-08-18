import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';
import Home from './pages/Home/Home';
import Tees from './pages/Tees/Tees';
import Manga from './pages/Manga/Manga';
import Hoodies from './pages/Hoodies/Hoodies';
import Games from './pages/Games/Games';
import Figures from './pages/Figures/Figures';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import Footer from './components/Footer/Footer';
import SlideShow from './components/SlideShow/SlideShow';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms'
import Accessibility from './pages/Accessibility';
import Cookies from './pages/Cookies';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={
          <>
            <Hero />
            <SlideShow />
            <Reviews /> 
          </>
        } />
        <Route path="/home" element={<Home />} /> 
        <Route path="/tees" element={<Tees />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/games" element={<Games />} />
        <Route path="/figures" element={<Figures />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/reviews" element={<Reviews />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
