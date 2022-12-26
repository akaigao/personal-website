import styled from 'styled-components'
import { TitleContainer } from '../Title/style'

export const ProjectContainer = styled.div`
  max-width: 560px;

  @media (max-width: 1230px) {
    max-width: 460px;
  }
  @media (max-width: 1030px) {
    max-width: 400px;
  }
  @media (max-width: 910px) {
    max-width: inherit;
  }
`

export const ThumbContainer = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 250px;

  margin-bottom: 15px;
`

export const Thumb = styled.img`
  width: 100%;
  height: 100%;

  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
`

export const TitleProject = styled(TitleContainer)`
  font-size: 1.8em;
`
