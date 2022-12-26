import { Title } from '../Title'
import { BoxContact, ContactContainer } from './style'

export function Contact({}) {
  return (
    <ContactContainer id="contact">
      <hr />
      <Title>Contact</Title>

      <BoxContact>
        <p>
          Passionate about software development, I love everything related to
          technology. If you think I can help, let's talk about it! <br />
        </p>
        <br />
        <span>aka@igao.com</span> or LinkedIn for quick response.
      </BoxContact>
    </ContactContainer>
  )
}
