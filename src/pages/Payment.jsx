import '../styles/payment.css'
import { FaWhatsapp } from 'react-icons/fa'   // WhatsApp icon
import bankLogo from '../assets/kuda.png' // Example logo image

function Payment() {

  // Copy account number to clipboard
  const copyAccountNumber = () => {
    navigator.clipboard.writeText("2052124969")
      .then(() => {
        alert("Account number copied to clipboard!")
      })
      .catch(() => {
        alert("Failed to copy account number.")
      })
  }

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Complete Your Registration</h1>

        <p>
          Transfer the registration fee to the account below
          and send your payment receipt on WhatsApp.
        </p>

        <div className="bank-box">
  <h3>Bank</h3>
  <div className="bank-info">
    <img src={bankLogo} alt="Kuda Bank Logo" className="bank-logo" />
    <span className="bank-name">Kuda MFB</span>
  </div>

  <h3>Account Name</h3>
  <p>Williams Emmanuel</p>

 <h3>Account Number</h3>
<div className="account-number-box" onClick={copyAccountNumber}>
  <p className="account-number">2052124969</p>
  <span className="copy-hint">(click to copy)</span>
</div>
</div>


        {/* ✅ WhatsApp button with icon */}
        <a
          href="https://wa.me/2348116787242?text=Hello%20Deecee%2C%20I%20have%20completed%20my%20payment.%20Here%20is%20my%20receipt."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp style={{marginRight: "8px"}} />
          Send Receipt On WhatsApp
        </a>
      </div>
    </div>
  )
}

export default Payment
