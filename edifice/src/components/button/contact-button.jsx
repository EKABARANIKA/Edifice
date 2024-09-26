import React from "react"
import "./contact-button.css";
export default function ContactButton(props){
    return(
        <div className='contact-button'>
          <button className="white-border">
            <button className="contact-btn" type="submit">{props.Name}<div></div></button>
          </button>     
      </div>
    )
}