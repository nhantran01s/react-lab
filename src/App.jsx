import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">NHAN.DEVOPS</div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">Hello, I'm</p>

          <h1>Tran Nhan</h1>

          <h2>System / DevOps Engineer</h2>

          <p className="hero-description">
            I build, deploy and operate applications using Linux, Docker,
            Nginx, GitHub Actions and Cloud technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a
              href="https://github.com/nhantran01s"
              className="btn secondary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
<section id="skills" className="skills-section">
  <p className="section-label">TECH STACK</p>
  <h2>Skills & Tools</h2>

  <div className="skills-grid">
    <div className="skill-card">Linux</div>
    <div className="skill-card">Docker</div>
    <div className="skill-card">Nginx</div>
    <div className="skill-card">Git & GitHub</div>
    <div className="skill-card">GitHub Actions</div>
    <div className="skill-card">MySQL</div>
    <div className="skill-card">Cloudflare</div>
    <div className="skill-card">Google Cloud</div>
  </div>
</section>
<section id="projects" className="projects-section">
  <p className="section-label">MY WORK</p>
  <h2>Featured Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <div className="project-number">01</div>

      <h3>React CI/CD Pipeline</h3>

      <p>
        Automated CI/CD pipeline for a React application using
        GitHub Actions, Docker, Docker Hub and Ubuntu Server.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Docker</span>
        <span>GitHub Actions</span>
        <span>Nginx</span>
      </div>

      <div className="project-links">
        <a href="#" target="_blank">GitHub →</a>
        <a href="#" target="_blank">Live Demo →</a>
      </div>
    </div>

    <div className="project-card">
      <div className="project-number">02</div>

      <h3>DevOps Portfolio Infrastructure</h3>

      <p>
        Portfolio deployed on Ubuntu Server with Docker,
        Nginx reverse proxy, Cloudflare DNS and HTTPS.
      </p>

      <div className="project-tech">
        <span>Linux</span>
        <span>Docker</span>
        <span>Nginx</span>
        <span>Cloudflare</span>
      </div>

      <div className="project-links">
        <a href="#" target="_blank">GitHub →</a>
        <a href="#" target="_blank">Live Demo →</a>
      </div>
    </div>

  </div>
</section>
      </main>
    </div>
  )
}

export default App
