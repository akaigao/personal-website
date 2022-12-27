import { Contact } from '../components/Contact'
import { TitleAbout } from '../styles/pagesstyles/aboutstyle'
import { ApresentationSection } from '../styles/pagesstyles/homestyle'

export default function About() {
  return (
    <>
      <ApresentationSection style={{ padding: '100px 0 0 0' }}>
        <TitleAbout>
          Experience of almost 10 years as a designer, having worked at
          award-winning agencies in the city, large consolidated companies and
          working as a freelancer. With all the experience I carry, I decided to
          make a career transition to the area I've always been passionate
          about: technology. <br />
          "Stay hungry. Stay foolish."
        </TitleAbout>
      </ApresentationSection>

      <Contact />
    </>
  )
}
