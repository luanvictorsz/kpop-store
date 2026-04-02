import React from 'react'

const CTASection = () => {
  return (
    <section className="cta-section" style={{
      background: 'var(--dark)',
      padding: '7rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="cta-bg" style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 60% 80% at 50% 50%, rgba(232,68,154,0.15) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 20% 80%, rgba(123,79,166,0.2) 0%, transparent 60%),
          radial-gradient(ellipse 30% 50% at 80% 20%, rgba(245,200,66,0.1) 0%, transparent 60%)
        `
      }}></div>
      <div className="cta-inner" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1.15,
          marginBottom: '1.5rem'
        }}>
          Qual concha<br />vai ser <em style={{
            fontStyle: 'normal',
            background: 'linear-gradient(90deg, var(--gold), var(--pink))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>a sua?</em>
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '2.5rem',
          lineHeight: 1.7
        }}>
          Junte-se às ARMYs que já estão colecionando os melhores photocards do BTS.<br />A sorte está esperando por você! 💜
        </p>
        <div className="hero-cta" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#" className="btn-primary">🐚 Escolher minha concha</a>
          <a href="https://wa.me/11978537707" className="btn-secondary">Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export default CTASection