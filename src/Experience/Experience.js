import React from 'react'

import styles from './Experience.module.css'

const Experience = () => {
  return (
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
  )
}

export default Experience
