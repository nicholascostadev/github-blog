import styled from 'styled-components'

export const PostsContainer = styled.div`
  width: 864px;
  max-width: 98%;
  margin: 4.5rem auto 3.5rem;

  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  position: relative;

  @media (max-width: 864px) {
    display: flex;
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`
