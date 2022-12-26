import { Project } from '../components/Project'
import { Title } from '../components/Title'
import {
  ApresentationSection,
  ContactSection,
  ProjectSection
} from '../styles/pagesstyles/homestyle'

export default function Home() {
  return (
    <>
      <ApresentationSection>
        <Title>
          Wassupe everyone! 👋 <br /> I'm Igor, aka IGÃO, a developer based in
          Brazil.
        </Title>

        <h2>Let's talk.</h2>
        <hr />
      </ApresentationSection>

      <ProjectSection>
        <Project
          title="Título 1"
          subtitle="sub 1"
          url="https://www.instagram.com/akaigao/"
          thumb="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        />
        <Project
          title="Título 2"
          subtitle="sub 2"
          url="https://www.instagram.com/akaigao/"
          thumb="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        />
        <Project
          title="Título 3"
          subtitle="sub 3"
          url="https://www.instagram.com/akaigao/"
          thumb="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        />
        <Project
          title="Título 4"
          subtitle="sub 4"
          url="https://www.instagram.com/akaigao/"
          thumb="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        />
      </ProjectSection>

      <ContactSection>
        <Title>Contact</Title>
      </ContactSection>
    </>
  )
}
