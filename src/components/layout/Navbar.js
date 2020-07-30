import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
class Navbar extends Component {
   static propTypes ={
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }
   static defaultProps ={
        title: "Github Finder",
        icon : "fab fa-github"
    }
    render() {
        return (
            <nav className={"navbar bg-primary"}>
                <h2><i className={this.props.icon}/> {this.props.title}</h2>
                <ul>
                    <li>
                        <Link to={"/"}>HOME</Link>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;