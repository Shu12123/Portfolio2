import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
        <div className="flow">
            <p>For more details:<br/>Contact me:</p>
            {/* <a href="http://facebook.com">
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="http://www.linkedin.com/in/shubh-gupta711">
            <i className="fa-brands fa-linkedin" ></i></a>
            <a href="http://github.com/Shu12123">
            <i className="fa-brands fa-github" ></i></a>
            <a href="#">
            <i className="fa-solid fa-phone"></i></a> */}
            <i className="fab fa-facebook"></i>
            <a href="http://www.linkedin.com/in/shubh-gupta711">
            <i className="fab fa-linkedin"></i></a>
            <a href="http://github.com/Shu12123"></a>
            <i className="fab fa-github"></i>
            <i className="fas fa-phone"></i>
            <i className="fab fa-instagram"></i>
        </div>
        <div className="cent">
            <h4>My Projects</h4>
            <p>TextUtils</p>
            <p>Current Chronicle: A News App</p>
        </div>
    </div>
  )
}

export default Footer

