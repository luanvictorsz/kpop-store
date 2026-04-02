import React from 'react'

const Differentials = () => {
  const diffs = [
    { icon: '📦', title: 'Embalagem linda', desc: 'Cada produto chega embalado com capricho, digno de colecionador.' },
    { icon: '💌', title: 'Cartinha personalizada', desc: 'Uma mensagem especial escrita à mão só para você. Porque fã merece amor de volta.' },
    { icon: '🎁', title: 'Brinde surpresa', desc: 'Além do prêmio principal, sempre tem um brindinho extra pra alegrar o dia!' },
    { icon: '💜', title: 'Temática BTS', desc: '100% dedicado ao universo do BTS. Produtos selecionados para ARMYs de verdade.' }
  ]

  return (
    <section className="diff-section" style={{ background: 'linear-gradient(135deg, #F5EEFF, #FFE8F5)', padding: '6rem 2rem' }}>
      <div className="diff-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label">Por que a gente?</div>
        <h2 className="section-title">Amor em cada detalhe 💜</h2>
        <p className="section-desc">Feito com carinho por e para fãs. Cada pedido é uma experiência única.</p>

        <div className="diff-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginTop: '3.5rem'
        }}>
          {diffs.map((diff, idx) => (
            <div key={idx} className="diff-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s'
            }}>
              <span className="diff-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>{diff.icon}</span>
              <h4 style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: 'var(--dark)'
              }}>{diff.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,13,46,0.6)', lineHeight: 1.6 }}>{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials