import React from "react"
import styled from "styled-components"
import { mobile } from "../assests/globalStyles/responsive"

const Title = styled.div`
  width: 100%;
  letter-spacing: 0.3em;
  font-size: 2em;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3em 0 1em 0;
  ${mobile({
    width: "80%",
    fontSize: "1.3em",
  })}
`

const SectionTitle = ({ sectionTitle }) => {
  return <Title>{sectionTitle}</Title>
}

export default SectionTitle
