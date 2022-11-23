import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default function Card(props) {
    
    return (
        <a className="project" href="https://c4e-b6-lab.glitch.me/?fbclid=IwAR0UmzFHQKnCPSu8JLPTdzpBJ4XmdZnsyAARRKjICl54-EvcoIB0wMZgJzg#welcome-section">
            <img alt="" src= {props.url}/>
            <p>
                <FontAwesomeIcon icon={faChevronLeft} /> 
                {props.title} /
                <FontAwesomeIcon icon={faChevronRight} />
            </p>
        </a> 
    )
}


    


        