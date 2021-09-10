import React from "react";

export default function Footer() {
  return (
    <div className='footer'>
      <footer className='container'>
        
          <div className='footer-col'>
            <h4>Company</h4>
            <ul>
              <li>about us</li>
              <li>our services</li>
              <li>privecy policy</li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Follow us</h4>
            <div className='social-links'>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            </div>
          </div>
        
      </footer>
      
    </div>
  );
}
