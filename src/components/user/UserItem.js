import React, {Component} from 'react';

class UserItem extends Component {
    render() {
        const {login, avatar_url,html_url} = this.props.user
        return (
            <div className={"card all-center"}>
                <img className={"round-img"} src={avatar_url} alt="" style={{width:"60px"}}/>
                <h4>{login}</h4>
                <a href={html_url} className={"btn btn-dark"}>MORE</a>
            </div>
        );
    }
}

export default UserItem;