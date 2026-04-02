import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Todos os Produtos', icon: '🎁' },
    { id: 'concha', name: 'Conchas da Sorte', icon: '🐚' },
    { id: 'produto', name: 'Produtos Avulsos', icon: '🛍️' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section style={{
      padding: '4rem 1rem',
      background: 'var(--cream)',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="section-label">Nossos Produtos</div>
        <h2 className="section-title">Escolha sua sorte! 🎲</h2>
        <p className="section-desc" style={{ margin: '0 auto', padding: '0 1rem' }}>
          Selecione uma concha da sorte ou compre produtos avulsos. Todos os pedidos ganham brinde exclusivo!
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        padding: '1rem',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          style={{
            display: 'none',
            background: 'linear-gradient(135deg, var(--pink), var(--purple))',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
        >
          📱 Filtros
        </button>
        
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          flexWrap: 'wrap',
          flex: 1
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                background: selectedCategory === cat.id ? 'linear-gradient(135deg, var(--pink), var(--purple))' : 'white',
                color: selectedCategory === cat.id ? 'white' : 'var(--dark)',
                border: selectedCategory === cat.id ? 'none' : '1px solid rgba(0,0,0,0.1)',
                borderRadius: '100px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem'
              }}
            >
              <span>{cat.icon}</span>
              <span style={{ display: 'inline-block' }}>{cat.name}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="🔍 Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '0.5rem 0.8rem',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              width: '150px'
            }}
          />
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '0.5rem 0.8rem',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            <option value="default">Ordenar</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="name">Nome A-Z</option>
          </select>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          background: 'white',
          borderRadius: '24px'
        }}>
          <span style={{ fontSize: '3rem' }}>🔍</span>
          <h3 style={{ marginTop: '1rem', color: 'var(--dark)', fontSize: '1.2rem' }}>Nenhum produto encontrado</h3>
          <p style={{ color: 'rgba(26,13,46,0.6)', fontSize: '0.9rem' }}>Tente buscar por outro termo ou categoria</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
          padding: '0 0.5rem'
        }}>
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div style={{
        marginTop: '3rem',
        background: 'linear-gradient(135deg, var(--purple), var(--pink))',
        borderRadius: '20px',
        padding: '1.5rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <span style={{ fontSize: '2rem' }}>🎉</span>
        <h3 style={{ margin: '0.5rem 0', fontFamily: "'Noto Serif KR', serif", fontSize: '1.2rem' }}>
          Compre 3 Conchas e Ganhe 1 Grátis!
        </h3>
        <p style={{ opacity: 0.9, fontSize: '0.85rem' }}>
          Na compra de 3 conchas da sorte (qualquer tipo), você ganha uma concha básica totalmente grátis!
        </p>
      </div>
    </section>
  );
};

export default ProductList;