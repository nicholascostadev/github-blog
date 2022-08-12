import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  z-index: -1;

  img {
    position: absolute;
    width: auto;
  }

  img:last-child {
    right: 0;
  }
`

export const CenterImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
