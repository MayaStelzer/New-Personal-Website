import React, { useState, useEffect } from "react";
import "./index.css";
import profilePic from "./images/profilepic.jpg";
import websiteImage from "./images/portfolio/website.png";
import BSPImage from "./images/portfolio/bsp.png";
import MadridMetro from "./images/portfolio/madrid-metro.png";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    // Handle section observation for active navigation
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (entry.target.id === "hero") {
              setIsHeroVisible(true);
            } else {
              setIsHeroVisible(false);
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Popup modal functionality
    const openModal = (id) => {
      document.getElementById(id).style.display = "block";
    };

    const closeModal = (id) => {
      document.getElementById(id).style.display = "none";
    };

    const links = document.querySelectorAll(".portfolio-item a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const modalId = link.getAttribute("href").substring(1);
        openModal(modalId);
      });
    });

    const closeButtons = document.querySelectorAll(".close-modal");
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.closest(".popup-modal").id;
        closeModal(modalId);
      });
    });

    window.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup-modal")) {
        closeModal(event.target.id);
      }
    });

    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
      closeButtons.forEach((button) => button.removeEventListener("click", () => {}));
      window.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div>
      <header>
        <nav
          id="nav-wrap"
          className="nav"
          style={{
            display: "block",
            backgroundColor: isHeroVisible ? "transparent" : "#333",
          }}
        >
          <ul id="nav" className="nav">
            <li className={activeSection === "hero" ? "active" : ""}>
              <a href="#hero">Home</a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about">About</a>
            </li>
            <li className={activeSection === "resume" ? "active" : ""}>
              <a href="#resume">Resume</a>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <a href="#projects">Projects</a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div className="row banner">
          <h1 className="response-headline">Maya Stelzer</h1>
          <h3>
            <span>Student | </span>
            <span>Software Developer | </span>
            <span>Software Security Enthusiast</span>
          </h3>
          <h3>
            <span>Background pic: Barcelona, Spain by Maya Stelzer</span>
          </h3>
          <ul className="social">
            <li>
              <a href="https://github.com/MayaStelzer">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mayastelzer/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:maya@bipper.net">
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <div className="intro-info">
              <img src={profilePic} alt="Profile" />
              <p className="lead">
                Hello! I am Maya, a Computer Science student at Gonzaga University, originally from the Bay Area. I am
                proficient in Java, C++, Python, SQL, HTML, CSS, JavaScript, React, and Kotlin. I am currently looking
                for internships for Summer 2025.
              </p>
            </div>
          </div>
        </div>
        <div className="row resume-button">
          <div className="col-twelve">
            <a
              href="files/MayaStelzerResume.pdf"
              title="Download Resume"
              className="button button-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="resume">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
          </div>
        </div>
        <div className="row resume-timeline">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase" />
              </div>
              <div className="timeline-header">
                <h3>Deep Learning Intern</h3>
                <p>August 2024 - December 2024</p>
              </div>
              <div className="timeline-content">
                <h4>Qompass AI</h4>
                <p>
                  Learning practical applications of secure data transfer with GPG, exploring the most recent AI models
                  on HuggingFace, and analyzing LLM functionality.
                </p>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase" />
              </div>
              <div className="timeline-header">
                <h3>Teacher's Assistant</h3>
                <p>Fall 2024, Spring 2025</p>
              </div>
              <div className="timeline-content">
                <h4>Gonzaga University</h4>
                <p>
                  TA for Data Structures and Algorithms and Intro to CSII. Provided constructive, positive feedback to
                  students on programming assignments, quizzes, and exams.
                </p>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-pencil" />
              </div>
              <div className="timeline-header">
                <h3>Bachelor Degree</h3>
                <p>August 2022 - Present</p>
              </div>
              <div className="timeline-content">
                <h4>Gonzaga University</h4>
                <p>
                  Majoring in Computer Science, concentrating in Software Application Development and Software Security,
                  with a minor in Applied Mathematics. Maintaining a 3.9 GPA with an expected graduation of May 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Projects</h5>
            <h1>Check out my creations.</h1>
          </div>
        </div>
        <div className="row">
          <div class="twelve columns collapsed">
            <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">
            <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title="">
                    <img alt="Project" src={MadridMetro} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Madrid Metro Database</h5>
                        <p>Implemented a database to manage user registration, metro card purchases, monthly recharges, and
                        replacements</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title="">
                    <img alt="Project" src={BSPImage} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Binary Space Partitioning</h5>
                        <p>Analysis of naive vs efficient BSP</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title="">
                      <img alt="Project" src={websiteImage} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Personal Website</h5>
                          <p>Created my personal website using React to showcase my projects and resume.</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
            </div>
          </div>
          <div id="modal-01" className="popup-modal">
            <div className="modal-content">
              <span className="close-modal">&times;</span>
              <img src={MadridMetro} alt="Madrid Metro Database" />
              <h4>Madrid Metro Database</h4>
              <p>
              I designed ER models and relational schemas for the Madrid Metro ticket 
              system and implemented a database to manage user registration, metro card 
              purchases, monthly recharges, and replacements.
              </p>
              <a href="https://github.com/MayaStelzer/MadridMetro" target="_blank">
                Details
              </a>
            </div>
          </div>

          <div id="modal-02" className="popup-modal">
            <div className="modal-content">
              <span className="close-modal">&times;</span>
              <img src={BSPImage} alt="Binary Space Partitioning" />
              <h4>Binary Space Partitioning</h4>
              <p>
                This project analyzes the efficiency of a naive BSP algorithm
                versus an efficient BSP algorithm. The efficient algorithm uses a
                binary tree to divide the space, while the naive algorithm uses a
                list of lines.
              </p>
              <a href="https://github.com/MayaStelzer/Binary-Space-Partitioning" target="_blank">
                Details
              </a>
            </div>
          </div>

          <div id="modal-03" className="popup-modal">
            <div className="modal-content">
              <span className="close-modal">&times;</span>
              <img src={websiteImage} alt="Personal Website" />
              <h4>Personal Website</h4>
              <p>Created my personal website using React to showcase my projects and resume.</p>
              <a href="https://github.com/MayaStelzer/New-Personal-Website" target="_blank">
                Details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Connect With You.</h1>
            <p className="lead">Feel free to reach out to me with any questions or opportunities.</p>
          </div>
        </div>
        <div className="row contact-info">
          <div className="col-four tab-full collapse">
            <div className="icon">
              <i className="fas fa-envelope" />
              <h5>Email Me At</h5>
              <p>maya@bipper.net</p>
            </div>
          </div>
          <div className="col-four tab-full collapse">
            <div className="icon">
              <i className="fa fa-linkedin" />
              <h5>Let's Connect</h5>
              <a href="https://www.linkedin.com/in/mayastelzer/" target="_blank">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
