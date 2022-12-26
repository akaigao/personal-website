import styled from 'styled-components'
import { Box } from '../../styles/globalstyles'

export const ContactContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;

  hr {
    width: 100%;
    position: absolute;
    top: 0;
  }
`

export const BoxContact = styled(Box)`
  font-family: 'Source Code Pro', monospace;

  span {
    text-decoration: underline;
    font-weight: 700;
  }
`
