import styled from 'styled-components'

export const SearchBoxContainer = styled.div`
  width: 864px;
  max-width: 98%;
  margin: 72px auto;

  > div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['teal-200']};
  }
`

export const SearchInput = styled.input`
  margin-top: 0.75rem;
  width: 100%;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['teal-400']};
  padding: 0.75rem;

  background: ${(props) => props.theme['teal-800']};

  color: ${(props) => props.theme['gray-100']};

  transition: border 0.2s;

  &::placeholder {
    color: ${(props) => props.theme['teal-300']};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['teal-300']};
  }
`
