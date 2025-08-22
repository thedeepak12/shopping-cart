import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import { useCart } from '../contexts/CartContext';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-xl text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 mt-8 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-200 transition transform hover:scale-105 cursor-pointer rounded-lg p-3 sm:p-4 shadow-md bg-white flex flex-col h-[350px] sm:h-[400px] mx-auto w-[90%] sm:w-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-black mb-2 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-black font-bold text-xl mb-2">
              ${product.price}
            </p>
            <div className="mt-auto">
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-200 text-black px-4 py-2 rounded-full transition cursor-pointer hover:bg-gray-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
