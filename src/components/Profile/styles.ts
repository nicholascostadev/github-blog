import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  width: 864px;
  max-width: 98%;
  margin: 0 auto;
  margin-top: -60px;

  border-radius: 10px;
  background: ${(props) => props.theme['teal-600']};
  padding: 2.5rem 2rem;

  z-index: 10;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  @media (max-width: 628px) {
    flex-direction: column;

    justify-content: center;
    align-items: center;
    img {
      width: calc(148px * 1.5);
      height: auto;
    }
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

  p {
    color: ${(props) => props.theme['teal-100']};
  }

  > div {
    display: flex;
    gap: 0 24px;

    svg {
      color: ${(props) => props.theme['teal-300']};
    }
  }

  @media (max-width: 628px) {
    margin-left: 0;
    > a {
      top: 0.9375rem;
    }
    > div {
      margin-top: 0.5rem;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      gap: 0.5rem 0;
    }
  }
`
