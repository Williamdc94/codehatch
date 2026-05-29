import '../styles/achievement.css'
import sectionImg from '../assets/achievement.png'

function AchievementCurriculum() {

  const curriculum = [
    'Introduction to Web & HTML Basics',
    'HTML Structure & Building Your First Page',
    'CSS Fundamentals & Styling',
    'Responsive Design with Flexbox',
    'JavaScript Basics & Interactivity',
    'Building Your Portfolio Website',
    'Deployment, Showcase & Next Steps'
  ]

  return (
    <section id='curriculum' className="achievement-section">

      {/* LEFT */}
      <div className="achievement-card">

        <p className="section-subtitle">
          WHAT YOU WILL ACHIEVE
        </p>

        <h2>
          By the end of this challenge,
          you will be able to:
        </h2>

        <ul className="achievement-list">
          <li>✔ Understand how websites work</li>
          <li>✔ Write clean HTML & CSS code</li>
          <li>✔ Add interactivity with JavaScript</li>
          <li>✔ Build a responsive portfolio website</li>
          <li>✔ Host your website online</li>
          <li>✔ Gain confidence to continue your journey</li>
          <li>✔ Join a community of developers</li>
        </ul>

        <div className="achievement-image">
          <img src={sectionImg} alt="" />
        </div>

      </div>

      {/* RIGHT */}
      <div className="curriculum-card">

        <p className="section-subtitle">
          7-DAY CURRICULUM OVERVIEW
        </p>

        <div className="curriculum-list">

          {curriculum.map((item, index) => (
            <div className="curriculum-item" key={index}>

              <div className="day-badge">
                DAY {index + 1}
              </div>

              <p>{item}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default AchievementCurriculum