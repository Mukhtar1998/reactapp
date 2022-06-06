import { Link } from "react-router-dom";
import React from 'react'

function Nav(props) {
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/tools">Tools</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/calculator">Calculator</Link>
        </div>
    )
}

export default Nav

