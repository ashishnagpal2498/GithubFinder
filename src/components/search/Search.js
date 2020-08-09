import React,{useState,useContext} from 'react';
import DisplaySearchedUser from "../DisplaySearchedUser";
import GithubContext from "../../context/Github/githubContext";

const WAIT_INTERVAL = 1000;

const Search = () => {
    const  githubContext = useContext(GithubContext);

    const [text,searchText] = useState("");
    const [timer,setTimer] = useState(0);

    const {clearUsers,searchUsers,users} = githubContext
    const triggerChange = ()=> {
        if(text)
        searchUsers(text);
        else clearUsers();
    }
    const onHandler = (event)=> {
        setTimer(clearTimeout(timer));
        searchText(event.target.value);
    //    Timer
        setTimer(setTimeout(triggerChange, WAIT_INTERVAL));
    }
    const clearU = () =>{
        searchText('');
        clearUsers();
    }
        return (
            <div>
                <form className="form p-1" style={{width:"100%"}}>
                    <input type={"text"} name="text" placeholder="Search Here" value={text} onChange={onHandler}/>
                    {/*<input type={"submit"} className={"btn btn-dark btn-block"} style={{display:"block"}}/>*/}
                </form>
                {users.length >0 && <button onClick={clearU} className={"btn btn-light btn-block"}>Clear</button> }
                {text.length >0 && <DisplaySearchedUser searchedUser={text}/>}

            </div>

        );
};

export default Search;