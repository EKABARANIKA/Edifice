import React from 'react';
import './contact.css';
import { ContactArrow, Facebook, Insta, LinkedIn, Twitter } from '../icons/icons';
import ContactHeader from '../header/contact-header';
import { ContactCurve, contactLogo } from '../Images/imgs';


export default function Contact() {
  return (
    <div className='overAllPage'>
      <div className="contact-container">
      <ContactHeader />

      <div className='main-contact-section'>
       <div className='contact-content'>
         <h1>Take the first step toward something great. Let's connect!</h1>
         <img src={ContactCurve} alt='' />
         <div className="contact-info">
           <span>Give us a call:</span>
           <p>(123) 456-7890</p>
           <span>Send us an email:</span> 
           <p>edificecms@email.com</p>
           <div className="social-icons">
             <Twitter />
             <Facebook />
             <Insta />
             <LinkedIn />
           </div>
         </div>
       </div>

       <form className="contact-form">
         <input type="text" placeholder="Enter Your Name" />
         <input type="email" placeholder="Enter Your Email Address" />
         <input type="tel" placeholder="Enter Your Phone Number" />
         <textarea placeholder="About Enquiries"></textarea>
         <div className='contactSubmit'>
           <button className="send-msg">
             <button className="contactBtn" type="submit">Send Message</button>
           </button> 
           <div className='contact-arrow'>
            <ContactArrow />
           </div>
         </div>
        
       </form>
      </div>

      <div className='curve'>
        <img src={ContactCurve} alt='' />
      </div>

      <footer>
        <img src={contactLogo} alt='' />
        <span className='copyWriter'>
        © Copyright 2024, All Rights Reserved by edifice CMS
        </span>
      </footer>
    </div>
    </div>
  );
}

