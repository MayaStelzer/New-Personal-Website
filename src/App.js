import './index.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="hero">
        <div className="hero-content">
          <h1>Hi! I'm Maya</h1>
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>I am a third year student at Gonzaga University, pursing a major in Computer Science and a minor in Applied Mathematics. I have been studying computer science since my sophmore year in high school, and have coding experience in Java, C++, Python, SQL, HTML, CSS, Javascript, React, Kotlin. </p>
      </section>
      <section id="resume">
        <h2>Resume</h2>
        <p1>Write your resume here.</p1>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Showcase some of your work here.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p1>Include your contact details here.</p1>
      </section>
    </div>
  );
}

export default App;
