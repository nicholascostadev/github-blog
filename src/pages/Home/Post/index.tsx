import { formatDate } from '../../../utils/formatDate'
import { PostContainer } from './styles'

interface PostProps {
  title: string
  body: string
  url: string
  createdAt: string
}
export const Post = ({ body, title, url, createdAt }: PostProps) => {
  const cleanBody = body.replace(/[^\w ]/g, '')
  url = url.split('/')[url.split('/').length - 1]

  return (
    <PostContainer to={`issues/${url}`}>
      <div>
        <h1>{title}</h1>
        <span>{formatDate(createdAt)}</span>
      </div>
      <p>
        {cleanBody.length > 200
          ? cleanBody.substring(0, 200) + '...'
          : cleanBody}
      </p>
    </PostContainer>
  )
}
