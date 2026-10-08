function Education() {
  return (
    <section id="education" className="section">
      <div className="section-container">

        <h2>Education</h2>

        <div className="education-timeline">

          {/* VIT Chennai */}
          <div className="education-card">

            <div className="education-date">
              2025 – 2029
            </div>

            <h3>B.Tech — Computer Science and Engineering</h3>

            <h4>Data Science Specialization</h4>

            <p className="education-institute">
              Vellore Institute of Technology, Chennai
            </p>

            <div className="education-details">
              <span>CGPA: 9.2</span>
              <span>2025 – 2029</span>
            </div>

          </div>


          {/* IIT Madras */}
          <div className="education-card">

            <div className="education-date">
              Ongoing
            </div>

            <h3>BS in Data Science and Applications</h3>

            <h4>Foundation Level</h4>

            <p className="education-institute">
              Indian Institute of Technology Madras
            </p>

            <div className="education-details">
              <span>CGPA: 8.13</span>
              <span>Online Degree</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Education