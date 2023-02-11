import React from "react"
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="flex items-center justify-center py-3 bg-blue-400 font-medium">
            <ul className="flex items-center">
                <li className="mr-5"><Link to='/' >Home</Link></li>
                <li><Link to='/about' >About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
