import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero.webp';

function Hero() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/tees'); // Adjust the path if needed based on your routing setup
  };

  return (
    <section className="relative text-white">
      <img src={heroImage} alt="Hero" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-lg text-center">
          <h1 className="text-sm sm:text-md md:text-3xl lg:text-5xl font-bold leading-tight">
            Stylish Tees. 
            <span className="block">Cozy Hoodies.</span> 
            <span className="block">Epic Figures.</span> 
            <span className="block">Essential Manga.</span> 
            Exciting Games.
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-lg">
            Pre-orders are now open for the latest anime-themed gear!
          </p>
          <button
            className="mt-4 px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-red-600 hover:bg-red-700 text-white rounded font-bold "
            onClick={handleShopNowClick}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
