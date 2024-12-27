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
            <a href="files/MayaStelzerResume.pdf" title="Download Resume" class="button button-primary">Download Resume</a>
          </div>
        </div>
      </section>

      <section id="resume">
        <div class="row section-intro">
          <div class="col-twelve">
            <h5>Resume</h5>
          </div>  
          <div class="row resume-timeline">
            <div class="col-twelve resume-header">
              <h2>Work Experience</h2>
            </div>

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
        </div>
      </section>
      <section id="projects">
        <div class="row section-intro">
          <div class="col-twelve">
            <h5>Projects</h5>
            <h1>Check out my creations.</h1>
            </div>
        </div>
        <div class="row">
          <div class="twelve columns collapsed">
            <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-01" title="">
                    <img alt="Binary Space Partitioning" src={require('./images/portfolio/website.png').default}/>
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Binary Space Partitioning</h5>
                        <p>Analysis of naive vs efficient BSP</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"/>
                    </div>
                  </a>
                </div>
              </div>
              
              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-02" title="">
                    <img alt="Personal Website" src={require('./images/portfolio/website.png').default}/>
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Personal Website</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div id="model-01" class="popup-modal mfp-hide">
              <img class="scale-with-grid" src="images/portfolio/website.png" alt/>
              <div class="description-box">
                <h4>Binary Space Partitioning</h4>
                <p>Implemented naive and efficient Binary Space Partitioning from scratch. Performed unit tests and a performance evaluation comparing the simple algorithm against the efficient algorithm. Wrote an academic-style paper describing the problem and the algorithm it solves, the benchmarks for performance testing, and performance evaluation results.</p>
                <span class="categories">
                  <i class="fa fa-tag"/>C++</span>
              </div>
              <div class="link-box">
                <a href="https://github.com/MayaStelzer/Binary-Space-Partitioning" target="_blank">Details</a>
                <a class="popup-modal-dismiss">Close</a>
              </div>
            </div>

            <div id="model-02" class="popup-modal mfp-hide">
              <img class="scale-with-grid" src="images/portfolio/website.png" alt/>
              <div class="description-box">
                <h4>Personal Website</h4>
                <p>Created my own personal website for showing resume using React. </p>
                <span class="categories">
                  <i class="fa fa-tag"/>React, Javascript, HTML/CSS</span>
              </div>
              <div class="link-box">
                <a href="https://github.com/MayaStelzer/New-Personal-Website" target="_blank">Details</a>
                <a class="popup-modal-dismiss">Close</a>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section id="contact">
        <div class="row section-intro">
          <div class="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Connect With You.</h1>
            <p class="lead">Feel free to reach out to me with any questions or opportunities.</p>
          </div>
        </div>
        <div class="row contact-info">
          <div class="col-four tab-full collapse">
            <div class="icon">
              <i class="fas fa-envelope"/>
              <h5>Email Me At</h5>
              <p>maya@bipper.net</p>
            </div>
          </div>
          <div class="col-four tab-full collapse">
            <div class="icon">
              <i class="fa fa-linkedin"/>
              <h5>Let's Connect</h5>
              <a href="https://www.linkedin.com/in/mayastelzer/" target="_blank">LinkedIn Profile</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
