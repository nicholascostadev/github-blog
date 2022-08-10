import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  width: 864px;
  margin: 0 auto;
  margin-top: -120px;

  border-radius: 10px;
  background: ${(props) => props.theme['teal-600']};
  padding: 2.5rem 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileInformation = styled.div`
  position: relative;
  flex: 1;
  margin-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
  }

  > div {
    display: flex;
    gap: 0 24px;
  }
`

export const GithubLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  gap: 0 8px;

  color: ${(props) => props.theme.blue};

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
