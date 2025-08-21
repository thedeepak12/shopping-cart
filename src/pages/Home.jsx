import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8 bg-gray-50">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Welcome to Our Shop
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our amazing products with the best quality and prices.
        </p>
        <div className="flex justify-center">
          <Link
            to="/shop"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-xl"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Quality Products
          </h2>
          <p className="text-gray-600">
            All our products are carefully selected to ensure the highest
            quality.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Fast Shipping
          </h2>
          <p className="text-gray-600">
            We deliver your orders quickly and safely to your doorstep.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            24/7 Support
          </h2>
          <p className="text-gray-600">
            Our customer service team is always ready to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
