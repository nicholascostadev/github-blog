import { PostContainer } from './styles'

interface PostProps {
  title: string
  body: string
  html_url: string
}
export const Post = ({ body, title, html_url: issueUrl }: PostProps) => {
  const cleanBody = body.replace(/[^\w ]/g, '')

  return (
    <PostContainer href={issueUrl} rel="noreferrer" target="_blank">
      <h1>{title}</h1>
      <p>
        {cleanBody.length > 200
          ? cleanBody.substring(0, 200) + '...'
          : cleanBody}
      </p>
    </PostContainer>
  )
}
