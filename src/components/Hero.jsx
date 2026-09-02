import profilePhoto from "../assets/profile/profile.jpeg"

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1>Varun</h1>

        <h2>
          Computer Science & Data Science Student
        </h2>

        <p className="hero-description">
          B.Tech Computer Science student specializing in Data Science
          at VIT Chennai, with a strong interest in programming, data,
          technology and building practical projects.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn">
            View My Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>

        </div>

      </div>

      <div className="hero-image">
        <img
          src={profilePhoto}
          alt="Varun"
        />
      </div>

    </section>
  )
}

export default Hero