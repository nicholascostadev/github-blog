import { GithubUserContext } from './../contexts/GithubUserContext'
import { useContext } from 'react'

export const useUsername = () => useContext(GithubUserContext)
