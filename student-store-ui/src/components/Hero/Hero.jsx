import * as React from "react";
import "./Hero.css";
import StudentStoreLogo from "../StudentStoreLogo/StudentStoreLogo.svg";

// This is the Hero component.
export default function Hero() {
  return (
    // The entire component is wrapped by a div element with a className of hero.
    <div className="hero">
      <div className="content"> 
       {/* Displays an intro message inside an element with the className of intro. */}
       <div className="intro">
        <h1>Welcome!</h1>
        <h1>Find Your Merch!</h1>
        <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
      </div>
      <div className = "media"> 
       {/* Renders a hero image inside an img tag with the className of hero-img. */}
        <img src={StudentStoreLogo} alt="Student Store Logo" className="hero-img" />
      </div>
      </div>
    </div>
  );
}
