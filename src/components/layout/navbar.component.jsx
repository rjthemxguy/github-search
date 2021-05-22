import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>
                <FontAwesomeIcon icon={faGithub} />
                {this.props.title}</h1>
            </div>
        )
    }
}

export default Navbar