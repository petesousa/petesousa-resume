import React from 'react'

import styles from './Courses.module.css'

const Courses = () => {
  return (
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
  )
}

export default Courses
