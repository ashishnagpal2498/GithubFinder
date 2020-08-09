import React  from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/layout/Navbar";
import User from "./components/user/User";
import About from "./components/pages/About";
import GithubState from "./context/Github/githubState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
        return (
            <GithubState>
            <Router>
                <Navbar/>
                <div className="container" >
                    <Switch>
                        <Route path = "/" exact component = {Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/user/:login" exact render={(props) => <User {...props} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
            </GithubState>
        );
};

export default App;
