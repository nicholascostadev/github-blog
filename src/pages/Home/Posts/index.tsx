import { Post } from '../Post'
import { PostsContainer } from './styles'

type PostType = {
  title: string
  body: string
  html_url: string
}

interface PostsProps {
  posts: PostType[]
}
export const Posts = ({ posts }: PostsProps) => {
  return (
    <PostsContainer>
      {posts?.map((post) => (
        <Post
          key={post.title}
          body={post.body}
          title={post.title}
          html_url={post.html_url}
        />
      ))}
      <Post
        body={
          ' Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
        }
        title="Title"
        html_url="https://www.google.com"
      />
    </PostsContainer>
  )
}
