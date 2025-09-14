import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Karanveer "Kar" Singh</h1>
          <p>Senior Software Engineer</p>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I'm a Senior Software Engineer at Palantir Technologies with extensive experience
            in full-stack development and data platform engineering. I specialize in building
            scalable data ingestion infrastructure and have led teams to deliver mission-critical
            applications for enterprise clients.
          </p>
          <p>
            Previously at Amazon, I worked on the Alexa data platform, developing streaming data
            solutions that served hundreds of data scientists and engineers. I have a Master's
            in Computer Engineering from Drexel University.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Key Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Change Data Capture (CDC) Platform</h3>
              <p>Spearheaded design and implementation of Foundry's CDC ingestion capability, enabling real-time data updates and eliminating costly batch ingests.</p>
            </div>
            <div className="project-card">
              <h3>Streaming Data Infrastructure</h3>
              <p>Developed first-class streaming ingestion with SDK support for Kafka, AWS Kinesis, and RabbitMQ, serving terabytes of data daily to 100+ engineers.</p>
            </div>
            <div className="project-card">
              <h3>150+ Data Source Connectors</h3>
              <p>Led delivery of 150+ new source types to Foundry, creating connectors for Azure, GCP, AWS, Salesforce, and other enterprise data sources.</p>
            </div>
            <div className="project-card">
              <h3>Well Surveillance Application</h3>
              <p>Built mission-critical oil & gas monitoring system using Apache Flink and Kafka, deployed company-wide to minimize revenue loss from well failures.</p>
            </div>
          </div>
        </section>

        <section id="timeline" className="section">
          <h2>Career Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Oct 2021 - Present</div>
              <div className="timeline-content">
                <h3>Senior Software Engineer</h3>
                <h4>Palantir Technologies</h4>
                <ul>
                  <li>Led team of 5 engineers on Foundry data connection platform</li>
                  <li>Spearheaded CDC ingestion capability for real-time data updates</li>
                  <li>Delivered 150+ new source types to Foundry platform</li>
                  <li>Developed streaming ingestion with SDK for Kafka, Kinesis, RabbitMQ</li>
                  <li>Built mission-critical well surveillance application using Flink & Kafka</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Aug 2020 - Sep 2021</div>
              <div className="timeline-content">
                <h3>Software Development Engineer</h3>
                <h4>Amazon</h4>
                <ul>
                  <li>Built Alexa data platform serving 100+ data scientists and engineers</li>
                  <li>Developed streaming platform delivering terabytes of data daily</li>
                  <li>Created AWS Lambda service for user onboarding automation</li>
                  <li>Built web application with React frontend and Java/DynamoDB backend</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Jun 2020</div>
              <div className="timeline-content">
                <h3>Master of Science in Computer Engineering</h3>
                <h4>Drexel University, Philadelphia, PA</h4>
                <p>Graduate degree focusing on advanced computer engineering principles and software development.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Programming Languages</h3>
              <p>Java, JavaScript/TypeScript, Python, Kotlin, SQL</p>
            </div>
            <div className="project-card">
              <h3>Frameworks & Libraries</h3>
              <p>React, Apache Spark, Apache Hudi, JDBC, Apache Kafka, Apache Flink</p>
            </div>
            <div className="project-card">
              <h3>Cloud & Infrastructure</h3>
              <p>AWS (Lambda, Kinesis, S3), Azure, Google Cloud Platform, Kubernetes</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Let's connect and discuss opportunities:</p>
          <div className="contact-links">
            <a href="mailto:karsingh306@gmail.com">Email</a>
            <a href="tel:267-294-7525">Phone</a>
            <a href="https://linkedin.com/in/karanveer-singh">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Karanveer Singh. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
