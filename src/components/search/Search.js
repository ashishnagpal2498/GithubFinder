import React,{useState} from 'react';
import PropTypes from "prop-types"
import DisplaySearchedUser from "../DisplaySearchedUser";

const WAIT_INTERVAL = 1000;

const Search = ({users,searchUser, clearUser}) => {

    const [text,searchText] = useState("");
    const [timer,setTimer] = useState(0);
    const triggerChange = ()=> {
        if(text)
        searchUser(text)
        else clearUser();
    }
    const onHandler = (event)=> {
        setTimer(clearTimeout(timer));
        searchText(event.target.value);
    //    Timer
        setTimer(setTimeout(triggerChange, WAIT_INTERVAL));
    }
    //clear Users
    const clearUsers = ()=>{
        searchText('');
        clearUser()
    }
        return (
            <div>
                <form className="form p-1" style={{width:"100%"}}>
                    <input type={"text"} name="text" placeholder="Search Here" value={text} onChange={onHandler}/>
                    {/*<input type={"submit"} className={"btn btn-dark btn-block"} style={{display:"block"}}/>*/}
                </form>
                {users.length >0 && <button onClick={clearUsers} className={"btn btn-light btn-block"}>Clear</button> }
                {text.length >0 && <DisplaySearchedUser searchedUser={text}/>}

            </div>

        );
};
Search.propTypes = {
    searchUser : PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    clearUser: PropTypes.func.isRequired
}

export default Search;