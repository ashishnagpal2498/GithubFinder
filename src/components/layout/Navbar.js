import React, {Component} from 'react';
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
                        <a href={"/"}>HOME</a>
                        <a href={"/about"}>About</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;