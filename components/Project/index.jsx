import { Subtitle } from '../Subtitle'
import { ProjectContainer, Thumb, ThumbContainer, TitleProject } from './style'

export function Project({ title, subtitle, thumb, url }) {
  return (
    <ProjectContainer>
      <ThumbContainer>
        <a href={url} target="_blank" rel="nonoopener noreferero">
          <Thumb src={thumb} alt={title} />
        </a>
      </ThumbContainer>

      <TitleProject>{title}</TitleProject>
      <Subtitle>{subtitle}</Subtitle>
    </ProjectContainer>
  )
}
