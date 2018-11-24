import React from 'react'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h3>PROJECTS</h3>
      <div className={styles.projectWrapper}>
        <h4>YouTube API based app</h4>
        <h5>JUL 2018</h5>
        <p>Single Page Application created using React, Redux, Redux-Saga and the YouTube API search.</p>
        <ul>
          <li>
            Live <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://petesousa-yt-react-redux.firebaseapp.com/">here</a>
          </li>
          <li>
            Code on <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/petesousa/yt-react-redux">github</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects
