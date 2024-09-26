import React,{useState} from 'react';
import { DownArrow, UpArrow } from '../icons/icons';
import { FAQImg } from '../Images/imgs';
import './faq.css';
export default function Faq(){
    const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How Can Digital Marketing Benefit My Business?",
      answer: "It can increase brand visibility, drive website traffic, generate leads, and ultimately boost sales and revenue."
    },
    {
      question: "Do I Need To Have A Large Budget For Digital Marketing?",
      answer: "CHIA branding helps you create a sustainable and eco-friendly brand image, attracting environmentally conscious customers."
    },
    {
      question: "Unique And Influential Design",
      answer: "We provide a range of green energy solutions, including Brand strategy, Marketing and communications, Product development, and Sustainability reporting to enhance growth."
    },
    {
      question: "The Power Of Influencer Marketing",
      answer: "We measure success through various KPIs such as brand awareness, customer engagement, and sustainability impact assessments."
    }
  ];
    return(
        <div className='FAQ'>
            <img src={FAQImg} alt='' />
            <div className="faq-section">
                {faqData.map((faq, index) => (
             <div key={index} className={`faq-item ${openFAQ === index  ? "open" : ""}`} >
             <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <button className="toggle-btn">
                     {openFAQ === index ? <UpArrow /> : <DownArrow />}
                 </button>
              </div>

             {openFAQ === index && (
              <div className="faq-answer">
                 <p>{faq.answer}</p>
              </div>
              )}
          </div>
          ))}
            </div>
        </div>
    )
}