import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'pix'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Pedido realizado:', {
        items: cartItems,
        total: totalPrice,
        customer: formData
      });
      
      setIsSubmitting(false);
      setIsComplete(true);
      
      setTimeout(() => {
        clearCart();
        onClose(); 
        if (typeof onCartClose === 'function') {
          onCartClose();
        }
        alert('Pedido realizado com sucesso! Em breve entraremos em contato.');
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 3000,
        animation: 'fadeIn 0.3s ease'
      }} onClick={onClose} />
      
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '90vh',
        background: 'white',
        borderRadius: '24px',
        zIndex: 3001,
        overflow: 'auto',
        animation: 'modalSlideIn 0.3s ease'
      }}>
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(135deg, var(--pink), var(--purple))',
          color: 'white',
          borderRadius: '24px 24px 0 0'
        }}>
          <h2 style={{ fontFamily: "'Noto Serif KR', serif" }}>
            {isComplete ? '✅ Pedido Confirmado!' : 'Finalizar Compra'}
          </h2>
          <button
            onClick={onClose}
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
        
        <div style={{ padding: '1.5rem' }}>
          {isComplete ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <span style={{ fontSize: '4rem' }}>🎉</span>
              <h3 style={{ marginTop: '1rem', color: 'var(--dark)' }}>Compra realizada com sucesso!</h3>
              <p style={{ color: 'rgba(26,13,46,0.6)', marginTop: '0.5rem' }}>
                Em breve você receberá um e-mail com os detalhes do pedido.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Endereço completo *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Cidade *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Método de pagamento *
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="pix">PIX (10% de desconto)</option>
                  <option value="credit">Cartão de Crédito</option>
                  <option value="boleto">Boleto Bancário</option>
                </select>
              </div>
              
              <div style={{
                background: '#f9f9f9',
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Resumo do Pedido:</h4>
                {cartItems.map(item => (
                  <div key={item.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.9rem',
                    marginBottom: '0.25rem'
                  }}>
                    <span>{item.name} x{item.quantity}</span>
                    <span>R${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div style={{
                  borderTop: '1px solid rgba(0,0,0,0.1)',
                  marginTop: '0.5rem',
                  paddingTop: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Total:</span>
                    <span style={{ color: 'var(--purple)' }}>R${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, var(--pink), var(--purple))'
                }}
              >
                {isSubmitting ? 'Processando...' : 'Confirmar Pedido'}
              </button>
            </form>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default CheckoutModal;