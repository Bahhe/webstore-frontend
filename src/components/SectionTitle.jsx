import React from "react"
import styled from "styled-components"
import { mobile } from "../assests/globalStyles/responsive"

const Title = styled.div`
  width: 100%;
  position: relative;
  letter-spacing: 0.3em;
  font-size: 2em;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4em 0 4em 0;
  ${mobile({
    width: "80%",
    fontSize: "1.3em",
  })}
  ::before {
    content: "TIMGAD";
    position: absolute;
    color: slategrey;
    opacity: .1;
    font-size: 3em;
    font-weight: 900;
    letter-spacing: .01em;
  }
`

const SectionTitle = ({ sectionTitle }) => {
  return <Title>{sectionTitle}</Title>
}

export default SectionTitle
