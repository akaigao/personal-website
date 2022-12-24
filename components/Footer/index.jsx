import { FooterContainer } from './style'

export function Footer() {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="/">Instagram</a>
        </li>
        <li>
          <a href="/">Github</a>
        </li>
        <li>
          <a href="/">LinkdIn</a>
        </li>
      </ul>

      <p>&copy;{new Date().getFullYear()} akaigão</p>
    </FooterContainer>
  )
}
