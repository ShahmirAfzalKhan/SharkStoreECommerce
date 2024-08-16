import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/cartSlice/cartSlice';

function Tees() {
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.search); // Get the search term from Redux store

    const products = [
        { id: 1, name: 'One Piece', color: 'Red', size: 'M', price: 5000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/A824943c4d11742c68b4e4b339d28180bS.jpg_640x640.jpg_.webp' },
        { id: 2, name: 'Demon Slayer', color: 'Green', size: 'L', price: 6000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/S4f70ef804afd48e79367e9029a385b36h/Tanjiro-Kamado-Green-Black-Plaid-Casual-Shirts-Cosplay-Kimetsu-No-Yaiba-Anime-Demon-Slayer-Beach-Shirt.jpg_.webp' },
        { id: 3, name: 'Blue Lock', color: 'Blue', size: 'XL', price: 7000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/S0ea99f5888c5424fbb13d1ca0968cc45z/New-Summer-Anime-Blue-Lock-T-shirts-3D-Print-Men-Woman-Short-Sleeve-Tees-Cartoons-Streetwear.jpg_.webp' },
        { id: 4, name: 'Beach', color: 'Black', size: 'M', price: 5500, image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sb4f621f7d9a64aa7819410ce87b025bbb/Hot-Ulquiorra-Cifer-T-Shirts-Bleach-Anime-Tees-Round-Neck-Washed-T-Shirts-Japanese-Harajuku-Unisex.jpg_.webp' },
        { id: 5, name: 'Blue Lock Bachira', color: 'Yellow', size: 'L', price: 6200, image: 'https://ae-pic-a1.aliexpress-media.com/kf/Se2b26957d638492a9dbee0b8c4ab9363m/Anime-Blue-Lock-T-Shirts-Football-Sport-3D-Printed-Streetwear-Men-Women-Casual-Fashion-Oversized-T.jpg_.webp' },
        { id: 6, name: 'Blue Lock Barou', color: 'Red', size: 'XL', price: 8000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/S245b54b50fe44d3cbeb259b393da248e4/Anime-Blue-Lock-T-Shirts-Football-Sport-3D-Printed-Streetwear-Men-Women-Casual-Fashion-Oversized-T.jpg_.webp' },
        { id: 7, name: 'JJK Itadori Yuji', color: 'Black', size: 'L', price: 8500, image: 'https://ae-pic-a1.aliexpress-media.com/kf/S0a9b68e2482b4640984c7d01e4f7cf5fM/Men-Graphic-T-Shirt-Cotton-Casual-Tshirt-Summer-Short-Sleeve-Tops-Harajuku-Black-Washed-T-Shirt.jpg_.webp' },
        { id: 8, name: 'Vegeta', color: 'Black', size: 'XL', price: 9000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/S1057a9efe1134081979d0fc70a6ea1f1y/Summer-Cotton-Loose-Washed-Tops-Tees-Anime-Print-T-Shirt-Men-Streetwear-Vintage-Black-T-Shirt.jpg_.webp' },
        { id: 9, name: 'Blue Lock Ken', color: 'Black', size: 'XL', price: 10000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sccdb8f7731dc463ba4093a5d182156cbT/Anime-Blue-Lock-T-Shirts-Oversized-Vintage-Washed-Isagi-Yoichi-T-shirt-Harajuku-Manga-Short-Sleeve.jpg_.webp' },
    ];

    const filteredProducts = products.filter(product => {
        const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
        const matchesPrice = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSize && matchesColor && matchesPrice && matchesSearch;
    });

    const handleSizeChange = (size) => {
        setSelectedSizes(prevSizes =>
            prevSizes.includes(size) ? prevSizes.filter(s => s !== size) : [...prevSizes, size]
        );
    };

    const handleColorChange = (color) => {
        setSelectedColors(prevColors =>
            prevColors.includes(color) ? prevColors.filter(c => c !== color) : [...prevColors, color]
        );
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Size</h2>
                    <div>
                        {['M', 'L', 'XL'].map(size => (
                            <div key={size}>
                                <input
                                    type="checkbox"
                                    id={`size-${size}`}
                                    value={size}
                                    onChange={() => handleSizeChange(size)}
                                    checked={selectedSizes.includes(size)}
                                />
                                <label htmlFor={`size-${size}`} className="ml-2">{size}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Color</h2>
                    <div>
                        {['Red', 'Green', 'Blue', 'Black', 'Yellow'].map(color => (
                            <div key={color}>
                                <input
                                    type="checkbox"
                                    id={`color-${color}`}
                                    value={color}
                                    onChange={() => handleColorChange(color)}
                                    checked={selectedColors.includes(color)}
                                />
                                <label htmlFor={`color-${color}`} className="ml-2">{color}</label>
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

export default Tees;
