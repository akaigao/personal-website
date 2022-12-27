import { Contact } from '../components/Contact'
import { Portfolio } from '../components/Portfolio'
import { Title } from '../components/Title'
import { ApresentationSection } from '../styles/pagesstyles/homestyle'

export default function Home({ respositories }) {
  return (
    <>
      <ApresentationSection>
        <Title>
          Wassupe everyone! 👋 <br /> My name is Igor Souza, aka IGÃO. <br />
          I'm a Developer and Designer based in Brazil.
        </Title>

        <h2>Let's talk.</h2>
        <hr />
      </ApresentationSection>

      <Portfolio respositories={respositories} />

      <Contact />
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/akaigao/repos')
  const data = await response.json()
  const respositories = data

  return {
    props: {
      respositories
    },
    revalidate: 5
  }
}
