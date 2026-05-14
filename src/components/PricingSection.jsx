import '../styles/pricing.css'
import { EmailJSResponseStatus } from '@emailjs/browser'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { HiOutlineBellAlert } from 'react-icons/hi2'

function PricingSection() {

  const formRef = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm('service_7bojnvm', 'template_25sc37a', formRef.current, 'ehzUOEOge5PUl8J0V')
      .then(() => {
        
        alert('Registration successful!')
      })
      .catch((error) => {
        console.error( error)
        alert('Registration failed. Please try again.')
      })
  }
  const steps = [
    {
      number: 1,
      title: 'Register',
      desc: 'Fill the form and reserve your slot.'
    },

    {
      number: 2,
      title: 'Make Payment',
      desc: 'Pay the registration fee to confirm.'
    },

    {
      number: 3,
      title: 'Get Access',
      desc: 'Receive your onboarding details.'
    },

    {
      number: 4,
      title: 'Join & Learn',
      desc: 'Attend classes and build your project.'
    }
  ]

  return (

    <section id='pricing' className="pricing-section">

      {/* LEFT */}
      <div className="pricing-left">

        <p className="pricing-subtitle">
          INVEST IN YOUR FUTURE
        </p>

        <h2>
          Affordable. Valuable. Worth It.
        </h2>

        <div className="price-cards">

          <div className="price-card active">

            <h4>EARLY BIRD</h4>

            <h1>₦5,000</h1>

            <span>₦7,500</span>

            <p>First 30 Slots Only</p>

          </div>

          <div className="price-card">

            <h4>STANDARD</h4>

            <h1>₦7,500</h1>

            <p>Regular Registration</p>

          </div>

        </div>

        <div className="pricing-note">
            <div>
          <HiOutlineBellAlert/>
          </div>
           <p>Limited seats to ensure quality learning</p>
        </div>

      </div>

      {/* CENTER */}
      <div className="pricing-form">

        <p className="pricing-subtitle">
          REGISTER NOW
        </p>

        <p className="form-text">
          Fill the form to reserve your spot
        </p>

          <form ref={formRef} onSubmit={sendEmail}>

          <input type="text" placeholder="Full Name" />

          <input type="text" placeholder="Phone Number" />

          <input type="email" placeholder="Email Address" />

          <select>
            <option>Select your level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
          </select>

          <button type="submit">
            Reserve My Spot Now →
          </button>

        </form>

        <small>
          You will receive payment details after registration.
        </small>

      </div>

      {/* RIGHT */}
      <div className="how-it-works">

        <p className="pricing-subtitle">
          HOW IT WORKS
        </p>

        <div className="steps">

          {steps.map((step) => (

            <div className="step" key={step.number}>

              <div className="step-number">
                {step.number}
              </div>

              <div>

                <h4>{step.title}</h4>

                <p>{step.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default PricingSection