import React from "react";
import "./header.css";
import Logo from "../Images/Logo.png";
import Button from "../button/button";
export default function Header(){
    return(
        <div className="overAllheader">
            <header>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <nav className="navBar">
                    <button>Home</button>
                    <button>Services</button>
                    <button>Pricing</button>
                    <button>Blog</button>
                    <a href="./contact" >Contact Us</a>
                </nav>
                <div >
                    <Button Class='Hero-Btn' Name='Let’s Talk' />
                </div>
            </header>
        </div>
    );
}