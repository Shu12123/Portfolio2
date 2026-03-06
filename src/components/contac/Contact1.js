import React from 'react'
import "./Contact1.css"
const Contact1 = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>

          <div className="form-group">
            <textarea rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="btn">Send Now</button>
        </form>
      </div>
      <div className="info-container">
        <div className="info-box">
          <i className="fa-solid fa-phone fa-2xl" style={{color: 'white'}}></i><br /><br />
          <h5>Phone Number</h5>
          <p>+91 9897874181</p>
        </div>

        <div className="info-box">
          <i className="fa-regular fa-envelope fa-2xl" style={{color: 'white'}} ></i><br /><br />
          <h5>Email</h5>
          <p>shubhgupta0737@gmail.com</p>
        </div>

        <div className="info-box">
          <i className="fa-brands fa-whatsapp fa-2xl" style={{color: 'white'}}></i><br /><br />
          <h5>WhatsApp</h5>
          <p>9897874181</p>
        </div>

        <div className="info-box">
          <a href="http://github.com/Shu12123">
            <i className="fa-brands fa-github fa-2xl" style={{color: 'white'}}></i></a><br /><br />
          <h5>Visit Github</h5>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Contact1
