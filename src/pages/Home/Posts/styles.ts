import styled from 'styled-components'

export const PostsContainer = styled.div`
  width: 864px;
  max-width: 98%;
  margin: 4.5rem auto 3.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 864px) {
    grid-template-columns: 1fr;
  }
`
