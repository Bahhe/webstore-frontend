import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  width: 100%;
  letter-spacing: .3em;
  font-size: 2em;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3em 0 1em 0;
`

const SectionTitle = ({sectionTitle}) => {
  return <Title>{sectionTitle}</Title>
}

export default SectionTitle
