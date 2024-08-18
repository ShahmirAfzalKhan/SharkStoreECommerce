import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/cartSlice/cartSlice';

function Manga() {
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.search);

    const products = [
        { id: 11, name: 'Jujutsu Kaisen, Vol. 1', author: 'Gege Akutami', price: 5000, image: 'https://m.media-amazon.com/images/I/81TmHlRleJL._SY425_.jpg' },
        { id: 12, name: 'One Piece, Vol. 15', author: 'Eiichiro Oda', price: 6000, image: 'https://m.media-amazon.com/images/I/A1DspTOlBQL._SY425_.jpg' },
        { id: 13, name: 'Bleach, Vol. 50', author: 'Tite Kubo', price: 7000, image: 'https://m.media-amazon.com/images/I/61jkfxaduSL._SY425_.jpg' },
        { id: 14, name: 'Dragon Ball Z', author: 'Akira Toriyama', price: 5500, image: 'https://m.media-amazon.com/images/I/91VQphYhskL._SY425_.jpg' },
        { id: 15, name: 'Naruto (3-in-1 Edition), Vol. 2', author: 'Masashi Kishimoto', price: 6200, image: 'https://m.media-amazon.com/images/I/91MBi0bj6yL._SY425_.jpg' },
        { id: 16, name: 'Jujutsu Kaisen, Vol. 15', author: 'Gege Akutami', price: 8000, image: 'https://m.media-amazon.com/images/I/91Df8KbDeUL._SL1500_.jpg' },
    ];

    const filteredProducts = products.filter(product => {
        const matchesAuthor = selectedAuthors.length === 0 || selectedAuthors.includes(product.author);
        const matchesPrice = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesAuthor && matchesPrice && matchesSearch;
    });

    const handleAuthorChange = (author) => {
        setSelectedAuthors(prevAuthors =>
            prevAuthors.includes(author) ? prevAuthors.filter(c => c !== author) : [...prevAuthors, author]
        );
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Author</h2>
                    <div>
                        {['Gege Akutami', 'Eiichiro Oda', 'Tite Kubo', 'Akira Toriyama', 'Masashi Kishimoto'].map(author => (
                            <div key={author}>
                                <input
                                    type="checkbox"
                                    id={`author-${author}`}
                                    value={author}
                                    onChange={() => handleAuthorChange(author)}
                                    checked={selectedAuthors.includes(author)}
                                />
                                <label htmlFor={`author-${author}`} className="ml-2">{author}</label>
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

export default Manga;
