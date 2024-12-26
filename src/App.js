import './index.css';
import profilePic from './images/profilepic.jpg';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul id="nav" class="nav">
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="hero">
        <div className="hero-content">
          <h1>Maya Stelzer</h1>
        </div>
      </section>
      <section id="about">
        <div class="row section-intro">
          <div class="col-twelve">
            <h5>About</h5>
            <div class="intro-info">
              <img src={profilePic} alt="Profile Picture"/>
              <p class="lead">
                Hello! I am Maya, a Computer Science student at Gonzaga University, originally from the Bay Area.
                I am proficient in Java, C++, Python, SQL, HTML, CSS, Javascript, React, and Kotlin.
                I am currently looking for internships for Summer 2025.
              </p>
            </div>
          </div>
        </div>
        <div class="row resume-button">
          <div class="col-twelve">
            <a href="files/resume.pdg" title="Download Resume" class="button button-primary">Download Resume</a>
          </div>
        </div>
      </section>

      <section id="resume">
        <div class="row section-intro">
          <div class="col-twelve">
            <h5>Resume</h5>
            <h1>My work and education experiences</h1>
            </div>  
        </div>
        <div class="row resume-timeline">
          <div class="timeline-wrap">

          <div class="timeline-block">
            <div class="timeline-ico">
              <i class="fa fa-briefcase"/>
            </div>
            <div class="timeline-header">
              <h3>Deep Learning Intern</h3>
              <p>August 2024 - December 2024</p>
            </div>
            <div class="timeline-content">
              <h4>Qompass AI</h4>
              <p>Learning practical applications of secure data transfer with GPG, exploring the most recent AI models on HuggingFace, converse about the functionality of LLMs.</p>
            </div>
          </div>

          <div class="timeline-block">
            <div class="timeline-ico">
              <i class="fa fa-briefcase"/>
            </div>
            <div class="timeline-header">
              <h3>Teacher's Assistant</h3>
              <p>Fall 2024, Spring 2025</p>
            </div>
            <div class="timeline-content">
              <h4>Gonzaga University</h4>
              <p>TA for Data Structures and Algorithms and Intro to CSII. Provided constructive, positive feedback to students on programming assignments, quizzes, and exams.</p>
            </div>
          </div>

          <div class="timeline-block">
            <div class="timeline-ico">
              <i class="fa fa-pencil"/>
            </div>
            <div class="timeline-header">
              <h3>Bachelor Degree</h3>
              <p>August 2022 - Present</p>
            </div>
            <div class="timeline-content">
              <h4>Gonzaga University</h4>
              <p>Majoring in computer science, contentrating in Software Application Development and Software Security, with a minor in Applied Mathematics. Maintaining a 3.9 GPA</p>
            </div>
          </div>

          </div>
        </div>
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
