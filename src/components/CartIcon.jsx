import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartIcon = () => {
  const { getCartItemCount, setIsCartOpen } = useCart();
  const itemCount = getCartItemCount();

  return (
    <button 
      onClick={() => setIsCartOpen(true)}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'linear-gradient(135deg, var(--pink), var(--purple))',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1 1H4L5.68 14.39C5.77144 15.0061 6.05238 15.5734 6.475 16.0145C6.89762 16.4556 7.438 16.7459 8.03 16.8H19.4C19.992 16.7459 20.5324 16.4556 20.955 16.0145C21.3776 15.5734 21.6586 15.0061 21.75 14.39L23 6H6" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="20.5" r="1.5" fill="white" stroke="white"/>
        <circle cx="18.5" cy="20.5" r="1.5" fill="white" stroke="white"/>
      </svg>
      
      {itemCount > 0 && (
        <span style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          background: 'var(--gold)',
          color: 'var(--dark)',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          fontFamily: "'DM Sans', sans-serif",
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;