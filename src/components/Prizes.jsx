import React from 'react'

const Prizes = () => {
  const prizes = [
    { rarity: 'comum', badge: 'Comum', emoji: '🃏', title: 'Photocard & Adesivos', desc: 'Pelo menos 1 photocard exclusivo dos integrantes do BTS ou um pacote de adesivos temáticos.', bg: 'linear-gradient(145deg, #2A1B45, #1E1035)', border: 'rgba(201,167,232,0.2)', badgeBg: 'rgba(201,167,232,0.2)', badgeColor: 'var(--lavender)' },
    { rarity: 'medio', badge: 'Médio', emoji: '🎴', title: 'Kit de Photocards', desc: 'De 2 a 3 photocards colecionáveis ou um mini pôster para decorar seu quarto com estilo.', bg: 'linear-gradient(145deg, #3A1840, #2B0D35)', border: 'rgba(232,68,154,0.3)', badgeBg: 'rgba(232,68,154,0.2)', badgeColor: 'var(--pink)' },
    { rarity: 'raro', badge: '⭐ Raro', emoji: '🏆', title: 'Kit Completo', desc: 'Pôster grande + kit completo com vários itens exclusivos. O prêmio máximo da sua sorte!', bg: 'linear-gradient(145deg, #2D2010, #1A1208)', border: 'rgba(245,200,66,0.4)', badgeBg: 'rgba(245,200,66,0.2)', badgeColor: 'var(--gold)' }
  ]

  return (
    <section id="premios" className="prizes-section" style={{ background: 'var(--dark)', padding: '6rem 2rem' }}>
      <div className="prizes-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ color: 'var(--gold)' }}>Prêmios</div>
        <h2 className="section-title" style={{ color: 'white' }}>O que você pode ganhar?</h2>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>Três níveis de raridade. Todo mundo ganha algo — mas os mais sortudos levam o kit completo! 🌟</p>

        <div className="prizes-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '3.5rem'
        }}>
          {prizes.map((prize, idx) => (
            <div key={idx} className={`prize-card ${prize.rarity}`} style={{
              borderRadius: '28px',
              padding: '2.5rem 2rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              cursor: 'default',
              background: prize.bg,
              border: `1px solid ${prize.border}`
            }}>
              {prize.rarity === 'raro' && (
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(245,200,66,0.3), transparent 70%)',
                  borderRadius: '50%'
                }}></div>
              )}
              <span className="prize-badge" style={{
                display: 'inline-block',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '0.35rem 1rem',
                borderRadius: '100px',
                marginBottom: '1.5rem',
                background: prize.badgeBg,
                color: prize.badgeColor
              }}>{prize.badge}</span>
              <span className="prize-emoji" style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>{prize.emoji}</span>
              <h3 style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '0.75rem'
              }}>{prize.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{prize.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Prizes