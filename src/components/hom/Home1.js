import "./home1.css";

const Home1 = () => {
  const baseUrl=process.env.REACT_APP_BASE_URL
  console.log({baseUrl})
  return (
    <section className="home">
      <div className="home-container">

        
        <div className="home-left">
          <img src={baseUrl+"/self.jpg"} alt="Shubh Gupta" />
        </div>

        
        <div className="home-right">
          <h1>Hi I am Shubh Gupta</h1>
          <h2>I am a Web Developer</h2>

          <p>
            As a dedicated web developer, I am driven by curiosity and continuous learning.
            Every line of code I write is a step toward growth, innovation,
            and creating better web experiences.
          </p>

          <h3>Follow me :</h3>

          {/* Social Icons */}
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
            <i className="fas fa-phone"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="buttons">
            <button className="biscuit">Download CV</button>
            <button className="biscuit github">Visit GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;