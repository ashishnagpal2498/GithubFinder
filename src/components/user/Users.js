import React, {Component} from 'react';
import UserItem from "./UserItem";
class Users extends Component {

    render() {
        const {users} = this.props
        return (
            <div style={UsersStyle}>
                {users.map((item)=>(
               <UserItem key={item.login} user={item}/>
                ))}
            </div>
        );
    }
}
const UsersStyle ={
    display : "grid",
    gridGap: "1rem",
    gridTemplateColumns:"repeat(3,1fr)"
}
export default Users;