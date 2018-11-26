import React from 'react'

import styles from './Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3>SKILLS</h3>
      <p>Currently focusing on <span className={styles.blue}>Javascript, React, Redux,</span> Functional Programming, <span className={styles.blue}>semantic HTML</span>, <span className={styles.blue}>CSS Modules</span> and responsive webdesign.</p>
      <h5>Familiar or have worked with:</h5>
      <ul className={styles.teal}>
        <li>Git</li>
        <li>Node js</li>
        <li>Express</li>
        <li>Angular 4</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>PHP</li>
        <li>Python</li>
        <li>Django</li>
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
  )
}

export default Skills
