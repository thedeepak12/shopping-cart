import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from '../contexts/CartContext';

function TestCart() {
  const { cartItems, addToCart } = useCart();

  return (
    <div>
      <p data-testid="cart-count">Items in cart: {cartItems.length}</p>
      <button
        onClick={() => addToCart({ id: 1, name: 'Test Product', price: 10 })}
        data-testid="add-button"
      >
        Add to Cart
      </button>
    </div>
  );
}

describe('Shopping Cart', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CartProvider>
        <TestCart />
      </CartProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should start with an empty cart', () => {
    render(
      <CartProvider>
        <TestCart />
      </CartProvider>
    );

    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.textContent).toBe('Items in cart: 0');
  });

  it('should add an item to cart', () => {
    render(
      <CartProvider>
        <TestCart />
      </CartProvider>
    );

    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.textContent).toBe('Items in cart: 1');
  });
});
