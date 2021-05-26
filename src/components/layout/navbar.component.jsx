import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


 const Navbar = ({title}) => {
   
        return (
            <div>
                <h1>
                <FontAwesomeIcon icon={faGithub} />
                {title}</h1>
            </div>
        )
   
}

export default Navbar