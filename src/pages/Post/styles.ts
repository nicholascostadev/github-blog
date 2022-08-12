import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 864px;
  max-width: 100%;
  margin: 0 auto;

  position: relative;

  border-radius: 10px;
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: -60px;
  background: ${(props) => props.theme['teal-600']};
  border-radius: 10px;

  > div {
    padding-top: 2.25rem;
    position: relative;
    width: 100%;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    > div {
      margin-top: 0.5rem;
      display: flex;
      gap: 0 2rem;

      > div {
        color: ${(props) => props.theme['teal-200']};
      }

      @media (max-width: 520px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        gap: 0.5rem 0;
      }
    }
  }
`

export const PostBody = styled.div`
  width: 864px;
  max-width: 100%;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  p {
    margin: 1rem 0;
  }

  ul {
    margin-top: 0.5rem;
    margin-left: 2rem;
  }

  * {
    max-width: 100%;
  }

  blockquote {
    margin: 0;
    padding-left: 1.4rem;
    border-left: 4px solid ${(props) => props.theme['teal-400']};
  }

  pre,
  code {
    padding: 0.15rem;
    border-radius: 8px;
    background: ${(props) => props.theme['teal-500']};
  }

  pre {
    * {
      font-size: 0.9375rem !important;
      font-family: 'Fira Code', monospace !important;
    }

    > div {
      padding: 1rem;
      background: ${(props) => props.theme['teal-500']} !important;
    }
  }
`
