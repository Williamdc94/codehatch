import '../styles/hero.css'
import heroImg from '../assets/laptop.png' // add your laptop image here

function Hero() {
  return (
    <section id='home' className="hero">
        <div>
      <div className="hero-content">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-badge">
            7-DAY FRONTEND KICKSTART CHALLENGE
          </div>

          <h1>
            Build Your First Website in <span>7 Days.</span>
          </h1>

          <p>
            A practical, beginner-friendly challenge to learn HTML, CSS & JavaScript and build a responsive website from scratch.
          </p>

          <div className="hero-features">
            <span>✔ Live Classes</span>
            <span>✔ Beginner Friendly</span>
            <span>✔ Hands-on Projects</span>
            <span>✔ Certificate</span>
          </div>

          <div className="hero-buttons">
            <a href='#pricing' className="primary-btn">Secure My Spot Now →</a>
            <button className="secondary-btn disabled-btn" disabled>▶ Watch Trailer</button>
          </div>

          <div className="hero-users">
            <div className="avatars">
              <img src="i.pravatar.cc/40?img=1" />
              <img src="i.pravatar.cc/40?img=2" />
              <img src="i.pravatar.cc/40?img=3" />
              <img src="i.pravatar.cc/40?img=4" />
            </div>
            <p>200+ students are already building with Codehatch</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
        <img src={heroImg} alt="Laptop Preview" />
        </div>

      </div>
      {/* CURVE */}

<div className="hero-wave">
  <svg
    xmlns="www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,224L80,218.7C160,213,320,203,480,197.3C640,192,800,192,960,202.7C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
</div>

      </div>

    </section>
  )
}

export default Hero