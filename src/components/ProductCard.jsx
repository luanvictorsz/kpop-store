import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const getRarityColor = () => {
    switch(product.rarity) {
      case 'comum': return 'var(--lavender)';
      case 'medio': return 'var(--pink)';
      case 'raro': return 'var(--gold)';
      default: return 'var(--purple)';
    }
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    }}>
      {product.badge && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: product.popular ? 'var(--gold)' : getRarityColor(),
          color: product.popular ? 'var(--dark)' : 'white',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          padding: '0.3rem 0.8rem',
          borderRadius: '100px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          zIndex: 2
        }}>
          {product.badge}
        </div>
      )}
      
      <div style={{
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '1rem'
      }}>
        <img 
          src={imgSrc}
          alt={product.imageAlt || product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s'
          }}
          onError={(e) => {
            if (imgSrc === product.image) {
              setImgSrc(`http://localhost:5173${product.image}`);
            } else {
              e.target.src = 'https://via.placeholder.com/300x200/7B4FA6/FFFFFF?text=Imagem+Não+Encontrada';
            }
          }}
        />
      </div>
      
      <h3 style={{
        fontFamily: "'Noto Serif KR', serif",
        fontSize: '1.3rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
        color: 'var(--dark)'
      }}>
        {product.name}
      </h3>
      
      <p style={{
        fontSize: '0.9rem',
        color: 'rgba(26,13,46,0.65)',
        lineHeight: 1.6,
        marginBottom: '1rem',
        minHeight: '60px'
      }}>
        {product.description}
      </p>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div>
          <span style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'var(--purple)',
            fontFamily: "'Noto Serif KR', serif"
          }}>
            R${product.price}
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#f5f5f5',
            borderRadius: '8px',
            padding: '0.25rem'
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(Math.max(1, quantity - 1));
              }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer',
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                transition: 'background 0.2s'
              }}
            >
              -
            </button>
            <span style={{ minWidth: '30px', textAlign: 'center' }}>{quantity}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(quantity + 1);
              }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer',
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                transition: 'background 0.2s'
              }}
            >
              +
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            style={{
              background: 'linear-gradient(135deg, var(--pink), var(--purple))',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Adicionar
          </button>
        </div>
      </div>
      
      {showNotification && (
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#A8F0D8',
          color: '#1A0D2E',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          zIndex: 3,
          whiteSpace: 'nowrap'
        }}>
          ✓ Adicionado ao carrinho!
        </div>
      )}
    </div>
  );
};

export default ProductCard;