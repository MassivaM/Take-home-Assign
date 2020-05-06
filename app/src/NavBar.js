import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return (
        <ul>
            <li><Link to="/">Contact</Link> </li>
            <li><Link to="/info">Info</Link> </li>
            <li><Link to="/request">Request</Link> </li>

        </ul>
    )
}

export default NavBar;