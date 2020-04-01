import React from 'react'
import { Link } from "@reach/router";

export default function Nav() {
    return (
        <ul className="navigation">
		<li className="nav-list"><Link to="/" className="nav-link">Home</Link></li>
		<li className="nav-list"><Link to="/todo" className="nav-link">Todo</Link></li>
		
	</ul>
    )
}
