import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import CheckoutModal from './CheckoutModal';

const Cart = () => {
  const { 
    cartItems, 
    totalItems, 
    totalPrice, 
    isCartOpen, 
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();
  
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 2000,
        animation: 'fadeIn 0.3s ease'
      }} onClick={() => setIsCartOpen(false)} />
      
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        maxWidth: '500px',
        height: '100vh',
        background: 'white',
        zIndex: 2001,
        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideIn 0.3s ease'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(135deg, var(--pink), var(--purple))',
          color: 'white'
        }}>
          <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '1.5rem' }}>
            🛒 Carrinho ({totalItems})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            ✕
          </button>
        </div>
        
        {/* Cart Items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem'
            }}>
              <span style={{ fontSize: '4rem' }}></span>
              <h3 style={{ marginTop: '1rem', color: 'var(--dark)' }}>Seu carrinho está vazio</h3>
              <p style={{ color: 'rgba(26,13,46,0.6)' }}>Adicione alguns produtos para continuar</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
                style={{ marginTop: '1rem', display: 'inline-block' }}
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  marginBottom: '1rem',
                  background: '#f9f9f9',
                  borderRadius: '12px',
                  transition: 'transform 0.2s'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    background: 'white',
                    borderRadius: '12px',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.image}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: 'var(--dark)' }}>
                      {item.name}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(26,13,46,0.6)' }}>
                      R${item.price} cada
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '0.5rem'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          background: '#e0e0e0',
                          border: 'none',
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        -
                      </button>
                      <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: '#e0e0e0',
                          border: 'none',
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ff4444',
                          cursor: 'pointer',
                          marginLeft: 'auto',
                          fontSize: '0.8rem'
                        }}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                  
                  <div style={{
                    textAlign: 'right',
                    fontWeight: 'bold',
                    color: 'var(--purple)'
                  }}>
                    R${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.5rem',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            background: 'white'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              fontSize: '1.1rem'
            }}>
              <span><strong>Total:</strong></span>
              <span><strong style={{ color: 'var(--purple)', fontSize: '1.3rem' }}>
                R${totalPrice.toFixed(2)}
              </strong></span>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={clearCart}
                style={{
                  flex: 1,
                  background: '#f0f0f0',
                  border: 'none',
                  padding: '0.8rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  color: '#ff4444'
                }}
              >
                Limpar
              </button>
              <button
                onClick={() => {
                  setIsCheckoutOpen(true);
                  setIsCartOpen(false);
                }}
                className="btn-primary"
                style={{
                  flex: 2,
                  background: 'linear-gradient(135deg, var(--pink), var(--purple))'
                }}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
      
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
};

export default Cart;