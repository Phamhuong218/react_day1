import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faMobilePhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'
import './Body.css'
import Card from './Card.js'
export default function Body() {
  return (
    <main>
      <div className="container1">
        <h1>Hey I am MindXer</h1>
        <i>A Full Stack Web Developer</i>
      </div>

      <div className="container2">
        <div className="title">
          <h3>These are some of my projects</h3>
        </div>
        <div className='project-list'>
          <Card url="https://resources.mindx.edu.vn/uploads/images/anh%20web-02.png" 
                title="Sample 1"/>
          <Card url="https://resources.mindx.edu.vn/uploads/images/anh%20web-10.png" 
                title="Sample 2"/>
          <Card url="https://resources.mindx.edu.vn/uploads/images/anh%20web-11%20.png" 
                title="Sample 3"/>
          <Card url="https://resources.mindx.edu.vn/uploads/images/anh%20web-08.png" 
                title="Sample 4"/>
          <Card url="https://resources.mindx.edu.vn/uploads/images/anh%20web-13%20.png" 
                title="Sample 5"/>
          <Card url="https://resources.mindx.edu.vn/uploads/images/anh%20web-12.png" 
                title="Sample 6"/>
         
        </div>
        <button>Show All <FontAwesomeIcon icon={faChevronRight} /></button>
      </div>

      <div className="container3">
        <h1>Let's work together...</h1>
        <i>How do you take your coffee?</i>
        <div className="social-media">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </a>

          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
            <span>Github</span>
          </a>

          <a href="https://c4e-b6-lab.glitch.me/?fbclid=IwAR0UmzFHQKnCPSu8JLPTdzpBJ4XmdZnsyAARRKjICl54-EvcoIB0wMZgJzg#welcome-section">
            <FontAwesomeIcon icon={faAt} />
            <span>Send a mail</span>
          </a>
            
          <a href="https://c4e-b6-lab.glitch.me/?fbclid=IwAR0UmzFHQKnCPSu8JLPTdzpBJ4XmdZnsyAARRKjICl54-EvcoIB0wMZgJzg#welcome-section">
            <FontAwesomeIcon icon={faMobilePhone} />
            <span>Call me</span>
          </a>

        </div>
      </div>

      <div className="container4">
        <p>**This is just a fake portfolio. All the projects and contact details given are not real.</p>
        <p>© Created for mindX Technology School</p>
      </div>
    </main>
  )
}
