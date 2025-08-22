import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
