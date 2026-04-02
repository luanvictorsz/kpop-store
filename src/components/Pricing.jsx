import React from 'react'

const Pricing = () => {
  const plans = [
    { label: 'Básico', price: '5', desc: 'Uma tentativa para testar a sorte. Perfeito para a primeira vez!', featured: false },
    { label: 'Standard', price: '10', desc: 'Mais chances de prêmios melhores. O favorito das fãs!', featured: true, popular: true },
    { label: 'Premium', price: '20', desc: 'Experiência premium com prioridade nos prêmios raros e brinde extra!', featured: false }
  ]

  return (
    <section id="precos" className="pricing-section" style={{ background: 'var(--cream)', padding: '6rem 2rem' }}>
      <div className="pricing-inner" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label">Preços</div>
        <h2 className="section-title">Quanto custa?</h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>Opções para todos os bolsos. Quanto mais você investe, maior a expectativa!</p>

        <div className="pricing-cards" style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          marginTop: '3.5rem',
          flexWrap: 'wrap'
        }}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`price-card ${plan.featured ? 'featured' : ''}`} style={{
              background: plan.featured ? 'linear-gradient(135deg, var(--purple), var(--pink))' : 'white',
              borderRadius: '28px',
              padding: '2.5rem 2rem',
              width: '250px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: plan.featured ? '0 20px 60px rgba(123,79,166,0.35)' : '0 4px 20px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden',
              transform: plan.featured ? 'scale(1.05)' : 'none',
              color: plan.featured ? 'white' : 'inherit'
            }}>
              {plan.popular && (
                <div className="popular-badge" style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--gold)',
                  color: 'var(--dark)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '100px'
                }}>★ Popular</div>
              )}
              <div className="price-label" style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.6,
                marginBottom: '0.5rem'
              }}>{plan.label}</div>
              <div className="price-amount" style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '3.5rem',
                fontWeight: 900,
                lineHeight: 1
              }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 400 }}>R$</span>{plan.price}
              </div>
              <div className="price-desc" style={{
                fontSize: '0.9rem',
                opacity: 0.7,
                marginTop: '0.75rem',
                lineHeight: 1.6
              }}>{plan.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing