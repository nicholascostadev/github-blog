import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../axios/api'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import { Posts } from './Posts'
import { HomeContainer } from './styles'
// import { useUsername } from '../../hooks/useUsername'

export interface getIssuesParams {
  query?: string
  username: string
  repo: string
}

export interface getSpecificIssueParams {
  username: string
  repo: string
  issueId: string
}
interface UserInfoProps {
  name: string
  bio: string
  followers: number
  company?: string
  login: string
  url: string
}

interface IssuesProps {
  items: {
    title: string
    body: string
    url: string
    created_at: string
  }[]
}
export const Home = () => {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps)
  const [issues, setIssues] = useState<IssuesProps>({} as IssuesProps)

  const { username, repo } = useParams()

  const getIssues = useCallback(
    async ({ query, repo, username }: getIssuesParams) => {
      let response

      if (!query || query === '') {
        response = await api.get(`/repos/${username}/${repo}/issues`)

        setIssues({
          items: response.data,
        })
      } else {
        response = await api.get('/search/issues', {
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
      }
    },
    [],
  )

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
      setUserInfo({
        ...data,
        url: data.html_url,
      })
    }

    fetchUser()
    if (username && repo) getIssues({ username, repo })
  }, [username, repo, getIssues])

  if (!username || !repo) return <div>NO USERNAME</div>
  return (
    <HomeContainer>
      <Header />
      <Profile userInfo={userInfo} />
      <SearchBox getIssues={getIssues} />
      <Posts posts={issues.items} />
      <Footer />
    </HomeContainer>
  )
}
