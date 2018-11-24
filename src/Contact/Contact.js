import React from 'react'

import styles from './Contact.module.css'

const Contact = () => {
  return (
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
  )
}

export default Contact
