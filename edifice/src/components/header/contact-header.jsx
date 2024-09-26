import React from "react";
import "./contact-header.css";
import ContactButton from "../button/contact-button";
import { contactLogo } from "../Images/imgs";
export default function ContactHeader(){
    return(
        <div className="overAll-Contact-Header overAllPage">
            <header>
                <div className="Contact-logo">
                    <img src={contactLogo} alt="logo" />
                </div>
                <nav className="Contact-navBar">
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Projects</span>
                    <span>Contact Us</span>
                </nav>
                <div >
                    <ContactButton Name='Contact us'/>
                </div>
            </header>
        </div>
    );
}