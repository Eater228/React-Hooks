import React, {useReducer} from "react"
import axios from 'axios'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types"
import { GithubContext } from "./githubContex"
import { githubReducer } from "./githubReducer"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET 

const withCreads = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

// console.log(CLIENT_ID, 'asd', CLIENT_SECRET)

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
           withCreads(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()

        const response = await axios.get(
            withCreads(`https://api.github.com/users/${name}?`)
        )

        console.log('name', name)

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()

        const response = await axios.get(
            withCreads(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )

        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS})
    
    const setLoading = () => dispatch({type: SET_LOADING})

    const {user, users, repos, loading} = state

    return (
        <GithubContext.Provider value={{
            setLoading, search, getUser, getRepos, clearUsers,
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}