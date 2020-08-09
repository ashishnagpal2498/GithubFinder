import React, {useContext} from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/Github/githubContext";
const Users = () => {
    const githubContext = useContext(GithubContext);
    const {users,loading} = githubContext;
        if(loading) return <Spinner/>;
        return (
            <div style={UsersStyle}>
                {users.map((item)=>(
               <UserItem key={item.login} user={item}/>
                ))}
            </div>
        );
}
const UsersStyle ={
    display : "grid",
    gridGap: "1rem",
    gridTemplateColumns:"repeat(3,1fr)"
}
export default Users;