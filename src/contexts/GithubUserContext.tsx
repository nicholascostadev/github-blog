import { createContext, ReactElement, useState } from 'react'

interface GithubUserContextProps {
  username: string
  changeUsername: (username: string) => void
}

export const GithubUserContext = createContext<GithubUserContextProps>(
  {} as GithubUserContextProps,
)

export const GithubUserProvider = ({
  children,
}: {
  children: ReactElement
}) => {
  const [username, setUsername] = useState<string>('')

  const changeUsername = (username: string) => {
    setUsername(username)
  }

  return (
    <GithubUserContext.Provider value={{ username, changeUsername }}>
      {children}
    </GithubUserContext.Provider>
  )
}
