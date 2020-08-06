import React ,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import User from "./components/user/User";
import Search from "./components/search/Search";
import Spinner from "./components/layout/Spinner";
import axios from "axios";
import About from "./components/pages/About";
class App extends Component {

    state ={
        user: {},
        users: [],
        repos: [],
        loading: false
    }
    //Search Users
    searchUser = async (text)=>{
        this.setState({loading:true})
        this.setState({users:[]})
        console.log(text);
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        console.log(res.data);
        this.setState({users:res.data.items})
        this.setState({loading:false})
    }
    //Clear Users
    clearUser = ()=>{
        this.setState({users:[],loading: false})
    }

    // Get particular User
    getUser = async (username)=>{
        this.setState({loading:true})
        this.setState({user:{}})
        console.log('HEre',process.env.REACT_APP_GITHUB_CLIENT_ID);
        // console.log(text);
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        console.log(res.data);
        this.setState({user:res.data});
        this.setState({loading:false})
    };

    //Get User Repos
    getUserRepos = async (username)=>{
        this.setState({loading:true})
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        console.log(res.data);
        this.setState({repos:res.data});
        this.setState({loading:false})
    }

    render() {
        const {user,repos} = this.state;
        return (
            <Router>
                <Navbar/>
                <div className="container" >
                    <Route
                       path = "/"
                       exact
                       render = {() =>
                       <React.Fragment>

                               <Search searchUser={this.searchUser} users={this.state.users} clearUser={this.clearUser}
                               />
                               {this.state.loading && <Spinner/>}
                               <Users users={this.state.users}/>

                       </React.Fragment>
                       }
                    />
                    <Route path="/about" exact component={About}/>
                    <Route path="/user/:login" exact render={(props) =>
                        <User {...props} getUser={this.getUser} user={user} loading={this.state.loading}
                              repos={repos} getUserRepos ={this.getUserRepos}/>
                    } />
                </div>
            </Router>
        );
    }
}

export default App;
