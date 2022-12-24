import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 30px 50px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: 'Source Code Pro', monospace;
  letter-spacing: 0.15em;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    font-size: 0.7rem;
  }

  li {
    font-size: 1.2em;
    list-style-type: none;

    a {
      text-decoration: none;
    }
  }
`
