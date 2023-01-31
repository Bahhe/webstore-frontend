import React from "react"
import styled from "styled-components"
import cpu from "../../../assests/images/cpu.webp"
import ram from "../../../assests/images/ram.webp"
import ssd from "../../../assests/images/ssd.webp"
import gpu from "../../../assests/images/gpu.webp"
import { mobile } from "../../../assests/globalStyles/responsive"

const Container = styled.div`
position: relative;
overflow: hidden;
  display: flex;
  margin: 5em 0 0 0;
  padding: 1em;
  background-size: cover;
  @media only screen and (max-width: 1280px) {
    flex-direction: column;
  }
  ${mobile({
    display: "none",
  })}
  &::before {
    background-color: #ff1777;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skew(0deg, 6deg);
    z-index: -1;
  }
`
const Section = styled.section`
  margin: 1em;
  flex: 1;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 1em solid white;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    filter: blur(5px);
  }
`
const Desc = styled.p`
  width: 30ch;
  text-align: center;
  color: #ffffffc2;
`
const Title = styled.h3`
  font-size: 2em;
  text-transform: uppercase;
  color: #ffffffe5;
`

const VideoSection = () => {
  return (
    <Container>
      <Section>
        <Image src={cpu} />
        <Title>cpu</Title>
        <Desc>
          The "brains" of your computer, the processor has a huge influence on
          performance, but depending on what you want to do, even the
          least-expensive model may be good enough
        </Desc>
      </Section>
      <Section>
        <Image src={ram} />
        <Title>ram</Title>
        <Desc>
          Some laptops come with only 4GB of RAM, but ideally you want at least
          8GB on even a budget system and 16GB if you can spend just a little
          more. For 99% of users, 32GB is more than enough, while 64GB and above
          is reserved for professional power users or high-end gamers.
        </Desc>
      </Section>
      <Section>
        <Image src={gpu} />
        <Title>gpu</Title>
        <Desc>
          If you're not playing PC games, creating 3D objects or doing high-res
          video editing, an integrated graphics chip (one that shares system
          memory) will be fine, especially Intel's latest Iris Xe graphics. If
          you have any of the above needs, though, a discrete graphics processor
          from Nvidia or AMD is essential
        </Desc>
      </Section>
      <Section>
        <Image src={ssd} />
        <Title>ssd</Title>
        <Desc>
          As important as the speed of your CPU is the performance of your
          storage drive. If you can afford it and don't need a ton of internal
          storage, get a laptop with a solid state drive (SSD) rather than a
          hard drive, because you'll see at least three times the speed and a
          much faster laptop overall
        </Desc>
      </Section>
    </Container>
  )
}

export default VideoSection
