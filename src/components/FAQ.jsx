
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

import '../styles/faq.css'

function FAQ() {

  const faqs = [

    {
      question: 'Is this challenge for complete beginners?',
      answer:
      'Yes. The challenge is beginner-friendly and designed for students with little or no coding experience.'
    },

    {
      question: 'What if I miss a live class?',
      answer:
      'All registered students will receive class recordings and materials.'
    },

    {
      question: 'Do I need any prior coding experience?',
      answer:
      'No prior experience is required. We start from the fundamentals.'
    },

    {
      question: 'Will I get the class recordings?',
      answer:
      'Yes. Recordings will be shared after each live session.'
    },

    {
      question: 'What do I need to participate?',
      answer:
      'A laptop, internet connection, and willingness to learn.'
    },

    {
      question: 'Will I get a certificate?',
      answer:
      'Yes. Students who complete the challenge will receive a certificate.'
    }

  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {

    if(activeIndex === index){
      setActiveIndex(null)
    }

    else{
      setActiveIndex(index)
    }
  }

  return (

    <section id='faq' className="faq-section">

      <p className="faq-subtitle">
        FREQUENTLY ASKED QUESTIONS
      </p>

      <div className="faq-grid">

        {faqs.map((faq, index) => (

          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >

            <div className="faq-question">

              <h4>{faq.question}</h4>

              <HiChevronDown className='faq-icon' />

            </div>

            <div className="faq-answer">

              <p>{faq.answer}</p>

            </div>
            

          </div>
          

        ))}

      </div>
      <div className='thebtn'>
                <button >Contact Us</button>
            </div>

    </section>
  )
}

export default FAQ