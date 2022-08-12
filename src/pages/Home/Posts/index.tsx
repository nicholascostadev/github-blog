import { Post } from '../Post'
import { PostsContainer } from './styles'

type PostType = {
  title: string
  body: string
  url: string
  created_at: string
}

interface PostsProps {
  posts: PostType[]
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <PostsContainer>
      {posts?.map((post) => {
        if (!post.title || !post.body) {
          return null
        }
        return (
          <Post
            key={post.title}
            body={post.body}
            title={post.title}
            url={post.url}
            createdAt={post.created_at}
          />
        )
      })}
    </PostsContainer>
  )
}
