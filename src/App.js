import React ,{Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
class App extends Component {

    static state ={
        users: []
    }
    render() {
        const users =[
            {
                login: "mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "defunkt",
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt",
            }
            ,{
                login: "pjhyett",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett",
            },
            {
                login: "wycats",
                avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
                html_url: "https://github.com/wycats",
            }


        ]
        return (
            <div>
                <Navbar/>
            <Users users={users}/>
            </div>
        );
    }


}

export default App;
