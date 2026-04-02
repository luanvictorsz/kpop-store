import React from 'react'

const Hero = () => {
  const floatingElements = [
    { emoji: '🌸', top: '15%', left: '8%', delay: '0s' },
    { emoji: '✨', top: '25%', right: '10%', delay: '1s' },
    { emoji: '💜', bottom: '20%', left: '12%', delay: '2s' },
    { emoji: '⭐', bottom: '30%', right: '8%', delay: '0.5s' },
    { emoji: '🎴', top: '60%', left: '5%', delay: '1.5s' },
    { emoji: '🃏', top: '10%', right: '25%', delay: '3s' },
  ]

  return (
    <section className="hero" style={{
      minHeight: '100vh',
      background: 'var(--dark)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div className="hero-bg"></div>
      <div className="stars"></div>

      {floatingElements.map((el, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            animation: 'floatEl 6s ease-in-out infinite',
            animationDelay: el.delay,
            fontSize: '2rem',
            ...(el.top && { top: el.top }),
            ...(el.left && { left: el.left }),
            ...(el.right && { right: el.right }),
            ...(el.bottom && { bottom: el.bottom })
          }}
        >
          {el.emoji}
        </div>
      ))}

      <div className="hero-content" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '2rem',
        animation: 'fadeUp 1s ease both'
      }}>
        <div className="tag" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, var(--pink), var(--purple))',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '0.4rem 1.2rem',
          borderRadius: '100px',
          marginBottom: '1.5rem',
          animation: 'fadeUp 1s 0.1s ease both'
        }}>
          Misa K-pop Store
        </div>
        <h1 style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1,
          marginBottom: '0.5rem',
          animation: 'fadeUp 1s 0.2s ease both'
        }}>
          Concha<br /><span style={{
            background: 'linear-gradient(90deg, var(--gold), var(--pink), var(--lavender))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>da Sorte</span>
        </h1>
        <p className="hero-subtitle" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '500px',
          margin: '1.5rem auto 2.5rem',
          lineHeight: 1.7,
          fontWeight: 300,
          animation: 'fadeUp 1s 0.3s ease both'
        }}>
          Escolha sua concha e descubra um prêmio surpresa do mundo K-pop. Todos ganham algo especial — seja photocard, pôster ou kit completo!
        </p>
        <div className="hero-cta" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeUp 1s 0.4s ease both'
        }}>
          <a href="#como-funciona" className="btn-primary">✨ Quero participar!</a>
          <a href="#premios" className="btn-secondary">Ver prêmios</a>
        </div>
      </div>

      <div className="scroll-hint" style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.8rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'bounce 2s infinite'
      }}>
        <span>Explorar</span>
        <span>↓</span>
      </div>
    </section>
  )
}

export default Hero