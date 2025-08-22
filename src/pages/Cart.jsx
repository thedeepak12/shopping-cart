import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 mt-8 mb-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="border-2 border-gray-200 rounded-lg p-8 shadow-md bg-white text-center">
          <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
          <Link
            to="/shop"
            className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-3 rounded-full transition duration-300 inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 mt-8 mb-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="border-2 border-gray-200 rounded-lg shadow-md p-4 sm:p-6 bg-white mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Cart Items ({cartItems.length})
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="py-4 flex flex-col sm:flex-row items-start sm:items-center"
            >
              <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-grow sm:ml-6">
                <h3 className="text-lg font-semibold text-black mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-black font-bold text-xl mb-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 text-black w-8 h-8 rounded-l-full flex items-center justify-center hover:bg-gray-300 transition cursor-pointer"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 text-black w-10 h-8 flex items-center justify-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 text-black w-8 h-8 rounded-r-full flex items-center justify-center hover:bg-gray-300 transition cursor-pointer"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-600 hover:text-red-800 transition cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg shadow-md p-4 sm:p-6 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
        </div>

        <div className="divide-y divide-gray-200">
          <div className="py-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
          </div>

          <div className="py-4">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
            </div>

            <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-full transition w-full cursor-pointer">
              Proceed to Checkout
            </button>

            <div className="text-center mt-4">
              <Link
                to="/shop"
                className="text-black hover:underline hover:underline-offset-4 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
