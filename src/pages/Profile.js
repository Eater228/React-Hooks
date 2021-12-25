import React from 'react'
import { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContex';

export const Profile = ({match}) => {

    // const github = useContext(GithubContext)
    // const name = match.params.name

    // useEffect(() => {
    //     github.getUser()
    //     github.getRepos(name)
    // }, [])



    console.log('asd',match);
    return(
        <div>
            <h1>Profile page</h1>
        </div>
    )
}