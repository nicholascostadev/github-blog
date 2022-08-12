import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IconAndText } from '../../components/IconAndText'
import { PostBody, PostContainer, PostHeader } from './styles'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { AiOutlineArrowLeft, AiOutlineGithub } from 'react-icons/ai'
import { AbsoluteLink, AbsoluteLinkAsButton } from '../../styles/global'
import { Header } from '../../components/Header'
import { BsCalendar2EventFill, BsChatFill } from 'react-icons/bs'
import { api } from '../../axios/api'
import { getSpecificIssueParams } from '../Home'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { formatDate } from '../../utils/formatDate'

// TODO: MAKE POSTS APPEAR AGAIN IF QUERY IS EMPTY

interface PostData {
  comments: number
  body: string
  created_at: string
  title: string
  user: {
    login: string
  }
  url: string
}

export const Post = () => {
  const { username, repo, issueId } = useParams()
  const [issue, setIssue] = useState<PostData>({} as PostData)
  const navigate = useNavigate()

  const getSpecificIssue = async ({
    repo,
    username,
    issueId,
  }: getSpecificIssueParams) => {
    const response = await api.get(
      `/repos/${username}/${repo}/issues/${issueId}`,
    )

    return response.data
  }

  useEffect(() => {
    const getIssue = async () => {
      if (repo && username && issueId) {
        const response = await getSpecificIssue({ repo, username, issueId })

        setIssue({
          ...response,
          url: response.html_url,
          created_at: formatDate(response.created_at),
        })
      }
    }

    getIssue()
  }, [issueId, repo, username])

  return (
    <>
      <Header />
      <PostContainer>
        <PostHeader>
          <div>
            <AbsoluteLinkAsButton
              position="top-left"
              onClick={() => navigate(`/${username}/${repo}`)}
            >
              <AiOutlineArrowLeft />
              VOLTAR
            </AbsoluteLinkAsButton>
            <AbsoluteLink
              href={`${issue.url}`}
              rel="noreferrer"
              target="_blank"
            >
              VER NO GITHUB
              <FaExternalLinkAlt />
            </AbsoluteLink>
            <h1>{issue?.title}</h1>
            <div>
              <IconAndText icon={<AiOutlineGithub />}>
                {issue?.user?.login}
              </IconAndText>
              <IconAndText icon={<BsCalendar2EventFill />}>
                {issue.created_at}
              </IconAndText>
              <IconAndText icon={<BsChatFill />}>
                {`${issue?.comments} comentários`}
              </IconAndText>
            </div>
          </div>
        </PostHeader>
        <PostBody>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className="markdown"
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    // @ts-ignore
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {issue?.body}
          </ReactMarkdown>
        </PostBody>
      </PostContainer>
    </>
  )
}
