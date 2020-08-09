import React ,{useState} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import User from "./components/user/User";
import Search from "./components/search/Search";
import Spinner from "./components/layout/Spinner";
import axios from "axios";
import About from "./components/pages/About";
import GithubState from "./context/Github/githubState";
const App = () => {
    const [repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(false);

    //Get User Repos
    const getUserRepos = async (username)=>{
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        setRepos(res.data)
        setLoading(false);
    };

        return (
            <GithubState>
            <Router>
                <Navbar/>
                <div className="container" >
                    <Route
                       path = "/"
                       exact
                       render = {() =>
                       <React.Fragment>

                               <Search
                               />
                               {loading && <Spinner/>}
                               <Users />

                       </React.Fragment>
                       }
                    />
                    <Route path="/about" exact component={About}/>
                    <Route path="/user/:login" exact render={(props) =>
                        <User {...props}
                              repos={repos} getUserRepos ={getUserRepos}/>
                    } />
                </div>
            </Router>
            </GithubState>
        );
}

export default App;
