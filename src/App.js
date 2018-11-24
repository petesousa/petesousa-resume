import React, { Component } from 'react'

import './App.module.css'

import Brand from './Brand/Brand'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Courses from './Courses/Courses'
import Contact from './Contact/Contact'

class App extends Component {
  render() {
    return (
      <main>

        <Brand />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Courses />
        <Contact />

      </main>
    )
  }
}

export default App
