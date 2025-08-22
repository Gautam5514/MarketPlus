import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

    if (!isOpen) return null;

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h4>Shopping Cart</h4>
                    <button className="btn-close" onClick={onClose}>&times;</button>
                </div>
                
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <i className="fa-solid fa-shopping-cart mb-3" style={{ fontSize: '3rem', color: '#ccc' }}></i>
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.description} className="cart-item-image" />
                                        <div className="cart-item-details">
                                            <h6>{item.description}</h6>
                                            <p className="text-muted">₹{item.price}</p>
                                            <div className="quantity-controls">
                                                <button 
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <span className="quantity">{item.quantity}</span>
                                                <button 
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-item-actions">
                                            <p className="item-total">₹{item.price * item.quantity}</p>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <h5>Total: ₹{getCartTotal()}</h5>
                                </div>
                                <div className="cart-actions">
                                    <button 
                                        className="btn btn-outline-danger me-2"
                                        onClick={clearCart}
                                    >
                                        Clear Cart
                                    </button>
                                    <button className="btn btn-primary">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;