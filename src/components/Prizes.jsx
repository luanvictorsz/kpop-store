import React from 'react'

const Highlights = () => {
  const highlights = [
    {
      emoji: '📸',
      title: 'Photocards',
      desc: 'Individuais ou em kit, dos seus integrantes favoritos do BTS. Edições exclusivas e limitadas.',
      bg: 'linear-gradient(145deg, #2A1B45, #1E1035)',
      border: 'rgba(201,167,232,0.2)',
      badgeBg: 'rgba(201,167,232,0.2)',
      badgeColor: 'var(--lavender)',
      badge: 'Mais vendido'
    },
    {
      emoji: '🖼️',
      title: 'Pôsteres',
      desc: 'Tamanho A2 de alta qualidade para decorar seu quarto com o estilo K-pop que você ama.',
      bg: 'linear-gradient(145deg, #3A1840, #2B0D35)',
      border: 'rgba(232,68,154,0.3)',
      badgeBg: 'rgba(232,68,154,0.2)',
      badgeColor: 'var(--pink)',
      badge: 'Limitado'
    },
    {
      emoji: '🎁',
      title: 'Kits Completos',
      desc: 'Photocards + pôster + adesivos + cartinha personalizada. O presente perfeito para qualquer ARMY!',
      bg: 'linear-gradient(145deg, #2D2010, #1A1208)',
      border: 'rgba(245,200,66,0.4)',
      badgeBg: 'rgba(245,200,66,0.2)',
      badgeColor: 'var(--gold)',
      badge: '⭐ Especial'
    }
  ]

  return (
    <section id="destaques" style={{ background: 'var(--dark)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ color: 'var(--gold)' }}>Categorias</div>
        <h2 className="section-title" style={{ color: 'white' }}>O que você encontra aqui</h2>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Produtos selecionados com carinho para cada tipo de fã. Todos com embalagem especial! 💜
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '3.5rem'
        }}>
          {highlights.map((item, idx) => (
            <div key={idx} style={{
              borderRadius: '28px',
              padding: '2.5rem 2rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              background: item.bg,
              border: `1px solid ${item.border}`
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '0.35rem 1rem',
                borderRadius: '100px',
                marginBottom: '1.5rem',
                background: item.badgeBg,
                color: item.badgeColor
              }}>{item.badge}</span>
              <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>{item.emoji}</span>
              <h3 style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '0.75rem'
              }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights