import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/cartSlice/cartSlice';

function Hoodies() {
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.search);

    const products = [
        { id: 21, name: 'One Piece', color: 'Red', size: 'M', price: 5000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/S86e85529784444dfa51df9a95796bffdk/Red-Hoodie-Print-Zip-Up-Hoodies-Women-Men-Jacket-Casual-Hip-Hop-Harajuku-Streetwear-Clothes-Tops.jpg_.webp' },
        { id: 22, name: 'Kakashi', color: 'Green', size: 'L', price: 6000, image: 'https://www.kayazar.com/images/product_gallery/1651693406_kayazar-TShirt-FF-Keren-Army-Green.webp' },
        { id: 23, name: 'Derain', color: 'Blue', size: 'XL', price: 7000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sbfbe4bc6b2bf4281a733624891e066c6c/Over-The-Top-Anime-Sweatshirts-Kids-One-Piece-Hoodie-3D-Hooded-Pullover-Cosplay-Harajuku-Casual-Tracksuit.jpg_.webp' },
        { id: 24, name: 'Kaizu Kuni Luffy', color: 'Black', size: 'M', price: 5500, image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sdb40653761eb426f88f3ee7fc6aaee3f0.jpg_640x640.jpg_.webppath/to/image4' },
        { id: 25, name: 'Surgeon Of Death', color: 'Yellow', size: 'L', price: 6200, image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sbacc3b8f50d64a1abe5606546cd185f5M/Anime-One-Piece-Roronoa-Zoro-Zipper-Hoodie-Sweatshirt-Hooded-Coat-Jacket-Unisex-Cosplay-Costumes-Fashion-Hoodie.jpg_.webp' },
        { id: 26, name: 'Mi Hawk', color: 'Red', size: 'XL', price: 8000, image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sdcddbc6c93874005a1b83be4f8ae0f21X/Anime-One-Piece-Roronoa-Zoro-Zipper-Hoodie-Sweatshirt-Hooded-Coat-Jacket-Unisex-Cosplay-Costumes-Fashion-Hoodie.jpg_.webp' },
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

export default Hoodies;
