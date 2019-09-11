import React, {Component} from 'react';
import PropTypes from "prop-types"
class Search extends Component {
    state = {
        text: ""
    }
    static propTypes = {
        searchUser : PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
    }
    onChange = (event)=> this.setState({[event.target.name]: event.target.value})
    onSubmit = (ev)=>{
        ev.preventDefault();
        this.props.searchUser(this.state.text)
        this.setState({text:""})
    }
    //clear Users
    clearUsers = ()=>{
        this.props.clearUser()
    }
    render() {
        const {users} = this.props
        return (
            <div>
                <form action="" className="form p-1" style={{width:"100%"}} onSubmit={this.onSubmit}>
                    <input type={"text"} name="text" placeholder="Search Here" value={this.state.text} onChange={this.onChange}/>
                    <input type={"submit"} className={"btn btn-dark btn-block "} style={{display:"100%"}}/>
                </form>
                {users.length>0 && <button onClick={this.clearUsers} className={"btn btn-light btn-block"}>Clear</button> }
            </div>

        );
    }
}

export default Search;