import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Your Name</h1>
          <p>Full Stack Developer & Designer</p>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Welcome to my personal website. I'm a passionate developer with experience
            in modern web technologies. I love creating beautiful and functional
            applications that solve real-world problems.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project.</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Get in touch with me:</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://github.com/yourusername">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
