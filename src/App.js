import React ,{Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/search/Search";
import Spinner from "./components/layout/Spinner";
import axios from "axios";
class App extends Component {

    state ={
        users: [],
        loading: false
    }
    //Search Users
    searchUser = async (text)=>{
        this.setState({loading:true})
        this.setState({users:[]})
        console.log(text);
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        console.log(res.data);
        this.setState({users:res.data.items})
        this.setState({loading:false})
    }
    //Clear Users
    clearUser = ()=>{
        this.setState({users:[]})
    }
    render() {
        return (
            <div >
                <Navbar/>
                <div className={"container"}>
                <Search searchUser={this.searchUser} users={this.state.users} clearUser={this.clearUser}/>
                {this.state.loading && <Spinner/>}
                <Users users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
