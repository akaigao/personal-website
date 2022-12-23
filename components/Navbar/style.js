import Link from 'next/link'
import styled from 'styled-components'

export const NavbarContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  font-size: 0.7rem;

  li {
    text-transform: uppercase;
    list-style-type: none;
  }
`

export const RedirectLink = styled(Link)`
  text-decoration: none;
`