import '../styles/stats.css'

function Stats() {
  return (
    <section id='about' className="stats">

      <p className="stats-subtitle">
        TRUSTED BY ASPIRING DEVELOPERS
      </p>

      <div className="stats-container">

        <div className="stat-card">
          <div className="stat-icon">🎓</div>

          <div>
            <h2>200+</h2>
            <p>Students Trained</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💻</div>

          <div>
            <h2>15+</h2>
            <p>Projects Built</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👍</div>

          <div>
            <h2>98%</h2>
            <p>Satisfaction Rate</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>

          <div>
            <h2>5★</h2>
            <p>Community Rating</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Stats