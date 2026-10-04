import { projects } from './data/projects';
// Swap this path to './App.editorial.css' to compare the alternate design.
// import './App.css';
import './App.editorial.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Header / Nav */}
      <header className="site-header">
        <div className="logo">Joshua Walker</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="about">
        <h1>Software Engineering Student & Full-Stack Developer</h1>
        <p>
          Software Engineering student at Brigham Young University-Idaho, graduating in December 2027 with a
          full-stack development emphasis. I build practical web applications, self-hosted services, and cloud
          deployments with a focus on clear, reliable user experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="https://github.com/Joshwalks7" target="_blank" rel="noopener noreferrer" className="btn secondary">GitHub</a>
          <a href="https://www.linkedin.com/in/jwalker-swe/" target="_blank" rel="noopener noreferrer" className="btn secondary">LinkedIn</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card${project.image ? ' has-image' : ''}${project.imagePlacement === 'below-title' ? ' image-below-title' : ''}`}>
              {project.image && project.imagePlacement !== 'below-title' && (
                <div className="project-image-frame">
                  <img className="project-image" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                </div>
              )}
              <div className="project-card-content">
                <h3>{project.title}</h3>
                {project.image && project.imagePlacement === 'below-title' && (
                  <div className="project-image-frame">
                    <img className="project-image" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                  </div>
                )}
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Watch Demo</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <p>JavaScript, React, HTML, CSS, Vite</p>
          </div>
          <div className="skill-category">
            <h3>Backend & Database</h3>
            <p>Python, C++, C#, Node.js, Express.js, SQLite, MySQL</p>
          </div>
          <div className="skill-category">
            <h3>Tools & Certifications</h3>
            <p>Git/GitHub, AWS Certified Cloud Practitioner, Spanish</p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="site-footer">
        <h2>Get In Touch</h2>
        <p>Currently seeking software engineering and full-stack development opportunities.</p>
        <div className="contact-info">
          <p><a href="https://www.linkedin.com/in/jwalker-swe/" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></p>
        </div>
        <p className="copyright">© 2026 Joshua Walker. Built with React & Vite, hosted via Cloudflare.</p>
      </footer>
    </div>
  );
}

export default App;
