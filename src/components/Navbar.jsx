import { Link } from 'react-router-dom';
import cartIcon from '../assets/images/shopping-cart.svg';

function Navbar() {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-200 min-h-16">
      <h1 className="text-3xl font-bold ml-8">Shopping Cart</h1>

      <div className="flex space-x-10 text-xl text-bold">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>

      <img
        className="filter invert w-10 h-auto mr-10 cursor-pointer"
        src={cartIcon}
        alt="Shopping Cart"
      />
    </div>
  );
}

export default Navbar;
