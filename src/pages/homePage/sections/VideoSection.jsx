import React from "react"
import { laptop, mobile } from "../../../assests/globalStyles/responsive"
import styled from "styled-components"
import cpu from "../../../assests/images/cpu.webp"
import ram from "../../../assests/images/ram.webp"
import ssd from "../../../assests/images/ssd.webp"
import gpu from "../../../assests/images/gpu.webp"

const Container = styled.div`
  display: flex;
  margin: 4em 0 0 0;
  padding: 2em;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  border-radius: 1em;
  @media only screen and (max-width: 1280px) {
    flex-direction: column;
  }
`
const Section = styled.section`
  margin: 1em;
  flex: 1;
  gap: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 1em;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
`
const Desc = styled.p`
  width: 100%;
  text-align: center;
  color: slategrey;
`
const Title = styled.h3`
  text-transform: uppercase;
`

const VideoSection = () => {
  return (
    <Container>
      <Section>
        <Image src={cpu} />
        <Title>cpu</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aspernatur.
        </Desc>
      </Section>
      <Section>
        <Image src={ram} />
        <Title>ram</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aspernatur.
        </Desc>
      </Section>
      <Section>
        <Image src={gpu} />
        <Title>gpu</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aspernatur.
        </Desc>
      </Section>
      <Section>
        <Image src={ssd} />
        <Title>ssd</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aspernatur.
        </Desc>
      </Section>
    </Container>
  )
}

export default VideoSection
