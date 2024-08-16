import heroImage from '../../assets/hero.webp';

function Hero() {
    return (
      <section className="relative text-white">
        <img src={heroImage} alt="Hero" className="w-full h-auto" />
        <div className="absolute top-1/4 left-16">
          <h1 className="text-6xl font-bold">Stylish Tees. <span className="block">Cozy Hoodies.</span> <span className="block">Epic Figures.</span> <span className="block">Essential Manga.</span> Exciting Games.</h1>
          <p className="mt-4 text-lg">Pre-orders are now open for the latest anime-themed gear™ 2!</p>
          <button className="mt-8 px-6 py-3 bg-transparent text-white rounded font-bold">Shop Now</button>
        </div>
      </section>
    );
}

export default Hero;