import { SearchBoxContainer, SearchInput } from './styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIssuesParams } from '../../pages/Home'

interface SearchBoxProps {
  getIssues: ({ query, repo, username }: getIssuesParams) => void
}

export const SearchBox = ({ getIssues }: SearchBoxProps) => {
  const [query, setQuery] = useState('')
  const { username, repo } = useParams()

  useEffect(() => {
    const timer = setTimeout(() => {
      if ((query && repo && username) || (query === '' && repo && username)) {
        getIssues({ query, repo, username })
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query, repo, username, getIssues])

  return (
    <SearchBoxContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>

      <SearchInput
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchBoxContainer>
  )
}
