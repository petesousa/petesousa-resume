import React, { Component } from 'react'

import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <main>

        <div className={styles.brand}>
          <h1>PETE SOUSA</h1>
          <h2 className={styles.blue}>WEB DEVELOPER</h2>
          <h4>31 years, Porto Alegre . BR</h4>
        </div>
        <div className={styles.about}>
          <h3>ABOUT</h3>
          <p>Self-taught developer passionate about learning new skills.
            Started programming in 2011, and since then has worked with
            different technologies, both professionally and on personal projects,
            and is confortable with working on both the Backend and the Frontend.
            Loves nutrition, cooking, sports and music and is also a certified massage therapist.</p>
        </div>
        <div className={styles.projects}>
          <h3>PROJECTS</h3>

          <div className={styles.projectWrapper}>
            <h4>YouTube API based app</h4>
            <h5>JUL 2018</h5>
            <p>Single Page Application created using React, Redux, Redux-Saga and the YouTube API search.</p>
            <ul>
              <li>Live <a href="https://petesousa-yt-react-redux.firebaseapp.com/">here</a></li>
              <li>Code on <a href="https://github.com/petesousa/yt-react-redux">github</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.skills}>
          <h3>SKILLS</h3>
          <p>Currently focusing on <span className={styles.blue}>Javascript, React, Redux,</span> Functional Programming, <span className={styles.blue}>semantic HTML</span>, <span className={styles.blue}>CSS Modules</span> and responsive webdesign.</p>
          <h5>Familiar or have worked with:</h5>
          <ul className={styles.teal}>
            <li>Node js</li>
            <li>Express</li>
            <li>Angular 4</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Django</li>
            <li>Git</li>
          </ul>
          <h3>SOFT SKILLS</h3>
          <ul className={styles.teal}>
            <li>Leadership</li>
            <li>Communication</li>
            <li>Marketing Planning</li>
            <li className={styles.blue}>Fluent English . IELTS Academic 8.0</li>
            <li>Basic Spanish</li>
          </ul>
        </div>

        <div className={styles.experience}>
          <h3>EXPERIENCE</h3>
          <h4>Under, <span className={styles.cityTag}>POA/BR</span> - <span className={styles.blue}>Product Manager</span></h4>
          <h5>OCT 2011 -APR 2013</h5>
          <ul>
            <li>Lead the Cloud Computing product team.</li>
            <li>Plan improvements and new features.</li>
            <li>Plan and execute the product’s marketing strategy (benchmarking, pricing, goals).</li>
            <li>Keep track of all aspects of the product’s performance and mantain constant communication with the company’s board and the technical and comercial teams.</li>
          </ul>
          <h4>Under, <span className={styles.cityTag}>POA/BR</span> - <span className={styles.blue}>Web Developer</span></h4>
          <h5>JAN 2011 - SEP 2011</h5>
          <ul>
            <li>Maintaining and creating new features to an Email Marketing platform called TeContato.</li>
            <li>Maintaining and creating new features to the company’s employees dashboard.</li>
            <li>Backend and Frontend development of a virtualization platform to manage around 10k cloud servers.</li>
            <li><span className={styles.teal}>Javascript, PHP, MySQL, Kohana, HTML, CSS, JQuery, Python, Django, MongoDB, NodeJs, RabbitMQ, Bash Scripts, Cron jobs, Git.</span></li>
          </ul>

        </div>

        <div className={styles.courses}>
          <h3>COURSES</h3>
          <ul>
            <li>
              <h4>Advanced React and Redux</h4>
              <span>Udemy - JUL 2018</span>
            </li>
            <li>
              <h4>Modern React with Redux</h4>
              <span>Udemy - MAY 2018</span>
            </li>
            <li>
              <h4>Angular 4: Complete Guide</h4>
              <span>Udemy - OCT 2017</span>
            </li>
            <li>
              <h4>Welcome to The Django</h4>
              <span>2011</span>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>CONTACT</h3>
          <ul>
            <li>
              <i className="fab fa-whatsapp"></i>
              +55 (51) 99171-8106
            </li>
            <li>
              <i className="fab fa-github"></i>
              <a href="http://github.com/petesousa">github.com/petesousa</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              im.pete.sousa@gmail.com
            </li>
          </ul>
        </div>




      </main>
    )
  }
}

export default App
