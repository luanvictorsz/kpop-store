import React from 'react'

const WhereToBuy = () => {
  const channels = [
    { icon: '📸', name: 'Instagram', desc: 'Canal principal' },
    { icon: '💬', name: 'WhatsApp', desc: 'Atendimento direto' },
    { icon: '🛒', name: 'Shopee', desc: 'Compra segura' }
  ]

  return (
    <section className="buy-section" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <div className="section-label">Onde comprar</div>
      <h2 className="section-title">Estamos por aí! 🛍️</h2>
      <p className="section-desc" style={{ margin: '0 auto' }}>Compre pela plataforma que você preferir. Atendemos em todos os canais!</p>

      <div className="channels" style={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        marginTop: '3.5rem',
        flexWrap: 'wrap'
      }}>
        {channels.map((channel, idx) => (
          <div key={idx} className="channel" style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            minWidth: '160px'
          }}>
            <span className="channel-icon" style={{ fontSize: '3rem' }}>{channel.icon}</span>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--dark)' }}>{channel.name}</span>
            <small style={{ fontSize: '0.8rem', color: 'rgba(26,13,46,0.5)' }}>{channel.desc}</small>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhereToBuy