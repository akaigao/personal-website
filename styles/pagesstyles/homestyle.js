import styled from 'styled-components'

export const ApresentationSection = styled.section`
  width: 100%;
  padding: 100px 0px;
  position: relative;

  h2 {
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
  }

  hr {
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
`

export const ProjectSection = styled.section`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 25px 10px;

  @media (max-width: 910px) {
    flex-direction: column;
    justify-content: center;
    gap: 25px 0px;
  }
`
