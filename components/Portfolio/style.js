import styled from 'styled-components'

export const PortfolioContainer = styled.section`
  max-width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 25px 10px;
  }

  li {
    list-style-type: none;
  }

  @media (max-width: 910px) {
    flex-direction: column;
    justify-content: center;
    gap: 25px 0px;
  }
`
