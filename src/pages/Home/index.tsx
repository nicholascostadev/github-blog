import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../axios/api'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import { Posts } from './Posts'
// import { useUsername } from '../../hooks/useUsername'

export interface getIssuesParams {
  query: string
  username: string
  repo: string
}
interface UserInfoProps {
  name: string
  bio: string
  followers: number
  company?: string
  login: string
}

interface IssuesProps {
  items: {
    title: string
    body: string
    html_url: string
  }[]
}
export const Home = () => {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps)
  const [issues, setIssues] = useState<IssuesProps>({} as IssuesProps)
  // const filteredIssues = issues.items.filter((issue) =>
  //   issue.title.includes(query),
  // )

  const { username, repo } = useParams()

  useEffect(() => {
    // const headers = {
    //   Authorization: `Bearer ${import.meta.env.GITHUB_API_KEY}`,
    //   'Content-type': 'application/json',
    // }

    const fetchUser = async () => {
      const response = await api.get(`/users/${username}`, {
        // headers,
      })
      const data = response.data
      setUserInfo(data)
    }

    fetchUser()
  }, [username, repo])

  const getIssues = useCallback(
    async ({ query, repo, username }: getIssuesParams) => {
      const response = await api.get('/search/issues', {
        // headers: {
        //   Authorization: `token ${import.meta.env.GITHUB_API_KEY}`,
        // },
        params: {
          q: `${query} repo:${username}/${repo}`,
        },
      })

      setIssues({
        items: response.data.items,
      })
    },
    [],
  )

  if (!username || !repo) return <div>NO USERNAME</div>
  return (
    <>
      <Header />
      <Profile userInfo={userInfo} />
      <SearchBox getIssues={getIssues} />
      <Posts posts={issues.items} />
    </>
  )
}
