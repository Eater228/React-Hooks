import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, Fragment } from 'react';
import { GithubContext } from '../context/github/githubContex';

export const Profile = () => {

    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const urlName = useParams()


    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)

        console.log('Effect');
    },[])

    if (loading) {
        return <p className='text-center'>Загрузка...</p>
    }   

    const {
        name, company, avatar_url,
        location, bio, blog, 
        login, html_url, followers,
        following, public_repos, publick_gists

    } = user


    return(
        <Fragment>
            <Link to='/' className='btn btn-link'> На головну</Link>

            <div className='card mb-4'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sn-3 text-center'>
                            <img src={avatar_url} alt={name}></img>
                            <h1>{name}</h1>
                            {location && <p>Місце знаходженя: {location} </p>}
                        </div>
                        <div className='col'>
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a 
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className='btn btn-dark'
                            >Відкрити профіль</a>
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong> {login}
                                </li> }

                                {company && <li>
                                    <strong>Компания: </strong> {login}
                                </li> }


                                {blog && <li>
                                    <strong>Website: </strong> {login}
                                </li> }
                                
                                <div className='badge badge-primary'>
                                    Підписники: {followers}
                                </div>

                                <div className='badge badge-success'>
                                    Підписаний: {following}
                                </div>

                                <div className='badge badge-info'>
                                    Репозиторій: {public_repos}
                                </div>

                                <div className='badge badge-dark'>
                                    Gists: {publick_gists}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )


}