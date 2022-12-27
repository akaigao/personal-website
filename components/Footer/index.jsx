import { FooterContainer } from './style'

export function Footer() {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/akaigao/"
            target="_blank"
            rel="nonoopener noreferero"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/akaigao"
            target="_blank"
            rel="nonoopener noreferero"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/akaigao/"
            target="_blank"
            rel="nonoopener noreferero"
          >
            LinkdIn
          </a>
        </li>
      </ul>

      <p>&copy;{new Date().getFullYear()} akaigão</p>
    </FooterContainer>
  )
}
