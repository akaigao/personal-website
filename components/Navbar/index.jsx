import { NavbarContainer, RedirectLink } from './style'

export function Navbar() {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <RedirectLink href="/">Home</RedirectLink>
        </li>
        <li>
          <RedirectLink href="/about">About</RedirectLink>
        </li>
        <li>
          <RedirectLink href="/">Portfolio</RedirectLink>
        </li>
        <li>
          <RedirectLink href="/">Contact</RedirectLink>
        </li>
      </ul>
    </NavbarContainer>
  )
}
