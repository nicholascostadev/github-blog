import { formatDate } from '../../../utils/formatDate'
import { PostContainer } from './styles'

interface PostProps {
  title: string
  body: string
  url: string
  createdAt: string
}
export const Post = ({ body, title, url, createdAt }: PostProps) => {
  let cleanBody
  let cleanTitle
  if (body && title) {
    cleanTitle = title.substring(0, 30) + '...'
    cleanBody = body.replace(/[^\w ]/g, '')
  }
  console.log(url)
  url = url.split('/')[url.split('/').length - 1]

  return (
    <PostContainer to={`issues/${url}`}>
      <div>
        <h1>{cleanTitle}</h1>
        <span>{formatDate(createdAt)}</span>
      </div>
      <p>
        {cleanBody && cleanBody.length > 200
          ? cleanBody?.substring(0, 200) + '...'
          : cleanBody}
      </p>
    </PostContainer>
  )
}
