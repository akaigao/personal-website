import styled from 'styled-components'
import { TitleContainer } from '../Title/style'

export const ProjectContainer = styled.div``

export const ThumbContainer = styled.div`
  overflow: hidden;

  display: flex;

  max-width: 495px;
  max-height: 300px;

  margin-bottom: 15px;
`

export const Thumb = styled.img`
  height: 100%;

  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray; /* IE */
`

export const TitleProject = styled(TitleContainer)`
  font-size: 1.8em;
`
