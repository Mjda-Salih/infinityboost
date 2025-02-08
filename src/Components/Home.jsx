import marvelRivalsVideo from "../assets/marvelrivals.mp4";
import marvelLogo from "../assets/marvelrivalslogo.png";
import "../Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <video
          className="hero-video"
          src={marvelRivalsVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
        <div className="hero-overlay">
          <div className="hero-content">
            <img src={marvelLogo} alt="Marvel Rivals" className="hero-image" />

            <p className="hero-subtitle">
              Boost your way to the top with infinite help.
            </p>
            {/* <button
              className="hero-button"
              onClick={() => {
                const featuresSection = document.getElementById("features");
                featuresSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Now
            </button> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* <section id="features" className="features-section">
        <div className="feature">
          <div className="feature-image placeholder"></div>
          <h2 className="feature-title">Iconic Battles</h2>
          <p className="feature-description">
            Relive the legendary battles that shaped the Marvel Universe.
          </p>
        </div>
        <div className="feature">
          <div className="feature-image placeholder"></div>
          <h2 className="feature-title">Heroes and Villains</h2>
          <p className="feature-description">
            Dive into the stories of Marvel’s most powerful characters.
          </p>
        </div>
        <div className="feature">
          <div className="feature-image placeholder"></div>
          <h2 className="feature-title">Unmatched Adventure</h2>
          <p className="feature-description">
            Experience the Marvel Universe like never before.
          </p>
        </div>
      </section> */}

      {/* Call-to-Action Section */}
      {/* <section className="cta-section">
        <h2 className="cta-title">Join the Fight</h2>
        <p className="cta-description">
          Choose your side and become part of the greatest Marvel battles.
        </p>
        <button className="cta-button">Get Started</button>
      </section> */}
    </div>
  );
};

export default Home;
