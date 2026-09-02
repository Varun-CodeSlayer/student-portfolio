import AmericanCenterCertificate from "../assets/certificates/American Centre PEP Certificate.jpeg"
import ParadoxCertificate from "../assets/certificates/Paradox 26 F&O Volunteer Certificate.png"

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-container">

        <h2>Certifications</h2>

        <div className="certificate-grid">

          <div className="certificate-card">
            <img
              src={AmericanCenterCertificate}
              alt="American Center Chennai Certificate"
            />

            <div className="certificate-content">
              <h3>Professional Enhancement Program</h3>
              <p>American Center Chennai</p>

              <a
                href={AmericanCenterCertificate}
                target="_blank"
                rel="noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>
            </div>
          </div>


          <div className="certificate-card">
  <img
    src={ParadoxCertificate}
    alt="Paradox 26 F&O Committee Volunteer Certificate"
  />

  <div className="certificate-content">
    <h3>Paradox 26 — F&O Committee</h3>

    <p>
      Volunteer Certificate — IIT Madras Online BS
    </p>

    <a
      href={ParadoxCertificate}
      target="_blank"
      rel="noreferrer"
      className="certificate-btn"
    >
      View Certificate
    </a>
  </div>
</div>


          
        </div>

      </div>
    </section>
  )
}

export default Certifications