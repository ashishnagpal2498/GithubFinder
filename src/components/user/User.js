import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types'
import Repos from "../Repos/Repos";
class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);

    }
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        getUser: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        getUserRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    };

    render() {
        const {
            name,
            avatar_url,
            location,
            company,
            bio,
            blog,
            hireable,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists
        } = this.props.user;
        const {loading,repos} = this.props;
        if(loading) return <Spinner/>
        return (
            <React.Fragment>
                <Link to={'/'} className="btn btn-light" >Back To search</Link>
                Hireable :
                {hireable ? <i className={"fas fa-check text-green"}/> : <i className={"fas fa-times-circle text-red"}/> }
                <div className="card grid-2">
                    <div className={"all-center"}>
                        <img src={avatar_url} className={"round-img"} style={{width:"140px"}} />
                        <h1>{name}</h1>
                        <h4>{location}</h4>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                        <a href={html_url} className="btn btn-dark m-1" >Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Username: </strong> {company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers : {followers}</div>
                    <div className="badge badge-success">Following : {following}</div>
                    <div className="badge badge-light">Public Repos : {public_repos}</div>
                    <div className="badge badge-dark">Public Gists : {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </React.Fragment>
        );
    }
}

export default User;