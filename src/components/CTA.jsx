import '../styles/cta.css'

import { HiOutlineRocketLaunch } from 'react-icons/hi2'

function CTA() {

  return (

    <section className="cta">

      <div className="cta-left">

        <div className="cta-icon">

          <HiOutlineRocketLaunch />

        </div>

        <div className="cta-text">

          <h2>
            Your coding journey starts now.
          </h2>

          <p>
            Take the first step with Codehatch today!
          </p>

        </div>

      </div>

      <button className="cta-btn">

        Join the Challenge Now →

      </button>

    </section>
  )
}

export default CTA