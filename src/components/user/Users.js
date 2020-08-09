import React, {useContext} from 'react';
import UserItem from "./UserItem";
import GithubContext from "../../context/Github/githubContext";
const Users = () => {
    const githubContext = useContext(GithubContext);
    const {users} = githubContext;
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