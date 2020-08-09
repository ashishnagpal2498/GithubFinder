import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from "./githubContext";
import GithubReducer from './githubReducer'
import {
    SEARCH_USER,
    SET_LOADING,
    GET_REPOS,
    GET_USER,
    CLEAR_USERS
} from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: [],
        loading: false,
        repos: [],
    }
    const [state,dispatch] = useReducer(GithubReducer,initialState);

    // SEARCH USERS
    const searchUsers = async (text)=>{
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
       return dispatch({
          type: SEARCH_USER,
            payload: res.data.items
        });
    }
    // GET USER
    const getUser = async (username)=>{
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    };

    // CLEAR USERS
    const clearUsers = ()=> dispatch({type: CLEAR_USERS})
    // GET REPOS
    const getUserRepos = async (username)=>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        dispatch({
            type: GET_REPOS,
            payload: res.data}
            )
    };

    // SET LOADING
    const setLoading = () => dispatch({type: SET_LOADING})

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                loading: state.loading,
                repos: state.repos,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;