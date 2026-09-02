function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-container">

        <h2>Contact</h2>

        <div className="contact-content">

          <div className="contact-intro">
            <h3>Let's Connect</h3>

            <p>
              I'm always open to connecting with people interested in
              technology, data science, projects, and opportunities.
            </p>
          </div>


          <div className="contact-links">

            <a href="mailto:varun.s2025b@vitstudent.ac.in" className="contact-item">
              <span className="contact-icon">✉</span>

              <div>
                <h3>Email</h3>
                <p>varun.s2025b@vitstudent.ac.in</p>
              </div>
            </a>


            <a
              href="https://www.linkedin.com/in/varun-s-801a59301/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">in</span>

              <div>
                <h3>LinkedIn</h3>
                <p>Connect with me on LinkedIn</p>
              </div>
            </a>


            <a
              href="https://github.com/Varun-CodeSlayer"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">GH</span>

              <div>
                <h3>GitHub</h3>
                <p>Check out my projects</p>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact