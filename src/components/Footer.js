import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 3em;
`

const UpperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8em 3em 3em 3em;
`

const Left = styled.div`
  flex: 1;
  margin: 2em;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  text-transform: uppercase;
  color: orange;
  margin: 0 0 1em 0;
  font-size: 3em;
`
const Desc = styled.p`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.3em;
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 1em 0;
`

const Middle = styled.div`
  flex: 1;
  margin: 2em;
  display: flex;
  flex-direction: column;
`

const Address = styled.p`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.3em;
  color: rgba(255, 255, 255, 0.3);
  margin: 3em 0 0.8em 0;
`
const PhoneNumber = styled.p`
  font-size: 2em;
  margin: 0 0 0.8em 0;
`
const Email = styled.p`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.3em;
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 0.8em 0;
`
const SocialMedia = styled.div`
  margin-top: 1em;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  color: rgba(255, 255, 255, 0.3);
`

const SectionOne = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
`
const SectionOneTitle = styled.div`
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 1.5em 0;
`
const SectionOneLinks = styled.div`
  font-weight: 300;
  margin: 0 0 0.8em 0;
  font-size: 0.8em;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`

const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
`

const SectionTwoTitle = styled.div`
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 1.5em 0;
`
const SectionTwoLinks = styled.div`
  margin: 0 0 0.8em 0;
  font-weight: 300;
  font-size: 0.8em;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`

const BottomSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FooterDesc = styled.div`
  margin: 3em;
  color: rgba(255, 255, 255, 0.5);
`
const Span = styled.span`
  color: orange;
  cursor: pointer;
`

const Footer = () => {
  return (
    <Container>
      <UpperSection>
        <Left>
          <Title>timgad.</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            perferendis impedit, reiciendis iste pariatur aliquid esse ratione?
            Aliquid, odio magnam.
          </Desc>
        </Left>
        <Middle>
          <Address>
            Avant supérette "mini-prix, Les, Alleés, Alles Salah Nezzar, Batna
            05000
          </Address>
          <PhoneNumber>+213 - 0561292009</PhoneNumber>
          <Email>timgadinformatique@gmail.com</Email>
          <SocialMedia>
            <FacebookIcon
              style={{
                color: 'orange',
                margin: '.4em',
                fontSize: '2em',
                cursor: 'pointer',
              }}
            />
            <InstagramIcon
              style={{
                color: 'orange',
                margin: '.4em',
                fontSize: '2em',
                cursor: 'pointer',
              }}
            />
          </SocialMedia>
        </Middle>
        <Right>
          <SectionOne>
            <SectionOneTitle>about market</SectionOneTitle>
            <SectionOneLinks>About Us</SectionOneLinks>
            <SectionOneLinks>Market Reviews</SectionOneLinks>
            <SectionOneLinks>Terms of Use</SectionOneLinks>
            <SectionOneLinks>Privacy Policy</SectionOneLinks>
          </SectionOne>
          <SectionTwo>
            <SectionTwoTitle>customer service</SectionTwoTitle>
            <SectionTwoLinks>Shipping Policy</SectionTwoLinks>
            <SectionTwoLinks>Compensation First</SectionTwoLinks>
            <SectionTwoLinks>My Account</SectionTwoLinks>
            <SectionTwoLinks>Return Policy</SectionTwoLinks>
          </SectionTwo>
        </Right>
      </UpperSection>
      <BottomSection>
        <FooterDesc>
          TIMGAD INFORMATIQUE © 2023 Store. All Rights Reserved. Designed by
          <Span> BahaEddine.com</Span>
        </FooterDesc>
      </BottomSection>
    </Container>
  )
}

export default Footer
