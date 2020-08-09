import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
const Navbar = ({icon,title}) =>
            <nav className={"navbar bg-primary"}>
                <h2><i className={icon}/> {title}</h2>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>;

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

Navbar.defaultProps ={
    title: "Github Finder",
    icon : "fab fa-github"
}


export default Navbar;