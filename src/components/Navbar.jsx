import { useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/images/shopping-cart.svg';
import menuIcon from '../assets/images/menu.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center border-b-2 border-gray-200 min-h-16">
        <div className="ml-4 md:hidden">
          <img
            className="filter invert w-8 h-auto cursor-pointer"
            src={menuIcon}
            alt="Menu"
            onClick={toggleMenu}
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center md:ml-8 md:text-left">
          Shopping Cart
        </h1>

        <div className="hidden md:flex space-x-10 text-xl text-bold">
          <Link to="/" className="hover:underline hover:underline-offset-4">
            Home
          </Link>
          <Link to="/shop" className="hover:underline hover:underline-offset-4">
            Shop
          </Link>
        </div>

        <img
          className="filter invert w-8 md:w-10 h-auto mr-4 md:mr-10 cursor-pointer"
          src={cartIcon}
          alt="Shopping Cart"
        />
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b-2 border-gray-200 z-10 shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4 text-xl">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/shop" onClick={toggleMenu}>
              Shop
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
