import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
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
