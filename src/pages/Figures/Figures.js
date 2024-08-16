import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/cartSlice/cartSlice';

function Figures() {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.search);

    const products = [
        { id: 31, name: 'Shanks', brand: 'Bandai', price: 5000, image: 'https://m.media-amazon.com/images/I/71EW2xdqyqL._AC_SL1500_.jpg' },
        { id: 32, name: 'Luffy', brand: 'Banpresto', price: 6000, image: 'https://m.media-amazon.com/images/I/61G4UM4L6uL.__AC_SX300_SY300_QL70_FMwebp_.jpg' },
        { id: 33, name: 'Naruto', brand: 'Good Smile', price: 7000, image: 'https://m.media-amazon.com/images/I/71sZXiyq3GL.__AC_SX300_SY300_QL70_FMwebp_.jpg' },
        { id: 34, name: 'Madara', brand: 'Kotobukiya', price: 5500, image: 'https://m.media-amazon.com/images/I/81zfDmzMr+L._AC_SL1500_.jpg' },
        { id: 35, name: 'Itachi', brand: 'MegaHouse', price: 6200, image: 'https://m.media-amazon.com/images/I/61sGoAke2oL.__AC_SX300_SY300_QL70_FMwebp_.jpg' },
        { id: 36, name: 'Zoro', brand: 'Bandai', price: 8000, image: 'https://m.media-amazon.com/images/I/51OPKZX9u8L._AC_SX569_.jpg' },
    ];

    const filteredProducts = products.filter(product => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesPrice = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesBrand && matchesPrice && matchesSearch;
    });

    const handleBrandChange = (brand) => {
        setSelectedBrands(prevBrands =>
            prevBrands.includes(brand) ? prevBrands.filter(c => c !== brand) : [...prevBrands, brand]
        );
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Brand</h2>
                    <div>
                        {['Bandai', 'Banpresto', 'Good Smile', 'Kotobukiya', 'MegaHouse'].map(brand => (
                            <div key={brand}>
                                <input
                                    type="checkbox"
                                    id={`brand-${brand}`}
                                    value={brand}
                                    onChange={() => handleBrandChange(brand)}
                                    checked={selectedBrands.includes(brand)}
                                />
                                <label htmlFor={`brand-${brand}`} className="ml-2">{brand}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Price</h2>
                    <div className="flex flex-col">
                        <input
                            type="number"
                            placeholder="Min Price"
                            className="mb-2 p-2 border rounded"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            className="p-2 border rounded"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                            <span>{`RS ${product.price}`}</span>
                            <button className="bg-black text-white px-3 py-1 rounded" onClick={() => handleAddToCart(product)}>🛒</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Figures;
