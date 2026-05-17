import '../styles/pricing.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function PricingSection() {
  const formRef = useRef()
  const navigate = useNavigate()

 const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    'service_7bojnvm',
    'template_25sc37a',
    formRef.current,
    'ehzUOEOge5PUl8J0V'
  )
    .then(() => {
      toast.info("📝 Details recorded! Please complete payment.", {
        position: "top-right",
        autoClose: 4000,
      })
      // Navigate after a short delay so user sees the toast
      setTimeout(() => navigate('/payment'), 2000)
    })
    .catch((error) => {
      console.error(error)
      toast.error("❌ Something went wrong. Try again.", {
        position: "top-right",
        autoClose: 4000,
      })
    })
}


  const steps = [
    { number: 1, title: 'Register', desc: 'Fill the form and reserve your slot.' },
    { number: 2, title: 'Make Payment', desc: 'Pay the registration fee to confirm.' },
    { number: 3, title: 'Get Access', desc: 'Receive your onboarding details.' },
    { number: 4, title: 'Join & Learn', desc: 'Attend classes and build your project.' }
  ]

  return (
    <section id='pricing' className="pricing-section">
      {/* LEFT */}
      <div className="pricing-left">
        <p className="pricing-subtitle">INVEST IN YOUR FUTURE</p>
        <h2>Affordable. Valuable. Worth It.</h2>

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
          <div><HiOutlineBellAlert/></div>
          <p>Limited seats to ensure quality learning</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="pricing-form">
        <p className="pricing-subtitle">REGISTER NOW</p>
        <p className="form-text">Fill the form to reserve your spot</p>

        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input type="text" name="phoneNumber" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <select name="level" required>
            <option value="">Select your level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
          </select>

          {/* ✅ Proper submit button */}
          <button className="primary-btn" type="submit">
            Reserve My Spot Now →
          </button>
        </form>

        <small>You will receive payment details after registration.</small>
      </div>

      {/* RIGHT */}
      <div className="how-it-works">
        <p className="pricing-subtitle">HOW IT WORKS</p>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  )
}

export default PricingSection
