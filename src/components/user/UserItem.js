import React, {Component} from 'react';
import {Link} from "react-router-dom";

class UserItem extends Component {
    render() {
        const {login, avatar_url,html_url} = this.props.user
        return (
            <div className={"card all-center"}>
                <img className={"round-img"} src={avatar_url} alt="" style={{width:"60px"}}/>
                <h4>{login}</h4>
                <Link to={`/user/${login}`} className={"btn btn-dark"}>MORE</Link>
            </div>
        );
    }
}

export default UserItem;