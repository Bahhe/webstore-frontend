import React from "react"
import styled from "styled-components"
import { mobile, tablet } from "../assests/globalStyles/responsive"

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
  margin: 4em auto;
  ${mobile({
    width: "80%",
    fontSize: "1.3em",
    display: (props) => props.display,
  })}
  ${tablet({
    width: "80%",
    display: (props) => props.display,
  })}
  ::before {
    content: "BlackBeard";
    position: absolute;
    color: slategrey;
    opacity: 0.1;
    font-size: 3em;
    font-weight: 900;
    letter-spacing: 0.01em;
  }
`

const SectionTitle = ({ sectionTitle, display }) => {
  return <Title display={display}>{sectionTitle}</Title>
}

export default SectionTitle
