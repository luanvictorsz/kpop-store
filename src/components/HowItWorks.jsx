import React from 'react'

const HowItWorks = () => {
  const steps = [
    { num: '01', emoji: '🐚', title: 'Escolha sua concha', desc: 'Escolha um número ou concha pelo Instagram, WhatsApp ou Shopee. É rapidinho!' },
    { num: '02', emoji: '💳', title: 'Faça o pagamento', desc: 'Confirme o pagamento via Pix ou na plataforma escolhida. Seguro e simples.' },
    { num: '03', emoji: '🎁', title: 'Receba seu prêmio!', desc: 'Seu prêmio surpresa chega com embalagem linda e cartinha personalizada. Todo mundo ganha!' }
  ]

  return (
    <section id="como-funciona" style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
      <div className="section" style={{ padding: 0, textAlign: 'center', margin: '0 auto' }}>
        <div className="section-label">Como funciona</div>
        <h2 className="section-title">Simples assim! 🎉</h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>Sem complicação, sem letra miúda. Você escolhe, paga e a sorte decide o seu prêmio.</p>

        <div className="how-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '3.5rem',
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {steps.map((step, idx) => (
            <div key={idx} className="how-card" style={{
              background: 'white',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--pink), var(--purple))'
              }}></div>
              <span className="how-num" style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '4rem',
                fontWeight: 900,
                color: 'var(--lavender)',
                opacity: 0.4,
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                lineHeight: 1
              }}>{step.num}</span>
              <span className="how-emoji" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>{step.emoji}</span>
              <h3 style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                color: 'var(--dark)'
              }}>{step.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(26,13,46,0.65)', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks