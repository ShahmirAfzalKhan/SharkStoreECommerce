import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/cartSlice/cartSlice';

function Games() {
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.search);

    const products = [
        { id: 31, name: 'Dark Souls III', company: 'FromSoftware', price: 5000, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB7g2dmJ2X0NYqFOTRKf2OoL7q6oV_uH5A5wNfDPJ71TsjFono' },
        { id: 32, name: 'The Elder Scrolls V: Skyrim', company: 'Bethesda Game Studios', price: 6000, image: 'https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg?width=300&crop=1%3A1%2Csmart&auto=webp' },
        { id: 33, name: 'Marvels Spider-Man', company: 'Sony', price: 7000, image: 'https://m.media-amazon.com/images/I/51F8SyqrT9L._SY445_SX342_.jpg' },
        { id: 34, name: 'Assassins Creed: Mirage', company: 'Ubisoft', price: 5500, image: 'https://m.media-amazon.com/images/I/71SvvrXlmVL._SX466_.jpg' },
        { id: 35, name: 'Pokemon Scarlet', company: 'Nintendo', price: 6200, image: 'https://m.media-amazon.com/images/I/81Nqi9GxAjL._SL1500_.jpg' },
        { id: 36, name: 'Elden Ring', company: 'FromSoftware', price: 8000, image: 'https://m.media-amazon.com/images/I/517ycY6AcCL._SY445_SX342_.jpg' },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCompany = selectedCompany.length === 0 || selectedCompany.includes(product.company);
        const matchesPrice = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCompany && matchesPrice && matchesSearch;
    });

    const handleCompanyChange = (company) => {
        setSelectedCompany(prevCompany =>
            prevCompany.includes(company) ? prevCompany.filter(c => c !== company) : [...prevCompany, company]
        );
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="flex flex-col md:flex-row p-4">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Company</h2>
                    <div>
                        {['FromSoftware', 'Bethesda Game Studios', 'Sony', 'Nintendo', 'Ubisoft'].map(company => (
                            <div key={company} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id={`company-${company}`}
                                    value={company}
                                    onChange={() => handleCompanyChange(company)}
                                    checked={selectedCompany.includes(company)}
                                    className="mr-2"
                                />
                                <label htmlFor={`company-${company}`}>{company}</label>
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
                    <div
                        key={product.id}
                        className="border p-4 rounded shadow transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                        >
                        <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                            <span>{`RS ${product.price}`}</span>
                            <button
                            className="bg-black text-white px-3 py-1 rounded cursor-pointer"
                            onClick={() => handleAddToCart(product)}
                            >
                                🛒
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Games;
