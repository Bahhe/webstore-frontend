import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import styled from "styled-components"
import { mobile } from "../assests/globalStyles/responsive"
import logo from "../assests/images/logo.png"
import { useNavigate } from "react-router-dom"

const Container = styled.footer`
  background-color: #db504a;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 3em;
`

const UpperSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 3em 3em 3em;
  ${mobile({
    flexDirection: "column",
    margin: "9em 3em 3em 3em",
  })}
`

const Left = styled.section`
  flex: 1;
  margin: 2em;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  margin: 0 0 1em 0;
  font-size: 3em;
  cursor: pointer;
`
const Desc = styled.p`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.3em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1em 0;
`

const Middle = styled.section`
  flex: 1;
  margin: 2em;
  display: flex;
  flex-direction: column;
`

const Address = styled.address`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.3em;
  color: rgba(255, 255, 255, 0.8);
  margin: 3em 0 0.8em 0;
  cursor: pointer;
`
const PhoneNumber = styled.address`
  font-size: 2em;
  margin: 0 0 0.8em 0;
`
const Email = styled.address`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.3em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 0.8em 0;
`
const SocialMedia = styled.div`
  margin-top: 1em;
  display: flex;
`

const Right = styled.section`
  flex: 1;
  display: flex;
  color: rgba(255, 255, 255, 0.8);
`

const SectionOne = styled.ul`
  margin: 2em;
  display: flex;
  flex-direction: column;
`
const SectionOneTitle = styled.h1`
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 1.5em 0;
`
const SectionOneLinks = styled.li`
  font-weight: 300;
  margin: 0 0 0.8em 0;
  font-size: 0.8em;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

const SectionTwo = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2em;
`

const SectionTwoTitle = styled.h1`
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 1.5em 0;
`
const SectionTwoLinks = styled.li`
  margin: 0 0 0.8em 0;
  font-weight: 300;
  font-size: 0.8em;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

const BottomSection = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FooterDesc = styled.p`
  margin: 3em;
  color: rgba(255, 255, 255, 0.8);
`
const Span = styled.span`
  color: white;
  cursor: pointer;
`
const IconWrapper = styled.div``

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <UpperSection>
        <Left>
          <Title onClick={() => navigate('/')}>
            <img src={logo} width="50%" height="100%" alt="logo" />
          </Title>
          <Desc>
            With over 20 years of experience in selling and repairing laptops,
            TIMGAD INFORMATIQUE is a well-known business in Algeria's Batna. Our
            customers are always happy ♥.️
          </Desc>
        </Left>
        <Middle>
          <Address>
            <a
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 0.8)",
              }}
              href="https://goo.gl/maps/9q4QC5Yyod1oBcKc7"
            >
              Avant supérette "mini-prix, Les, Alleés, Alles Salah Nezzar, Batna
              05000
            </a>
          </Address>
          <PhoneNumber>+213 - 0561292009</PhoneNumber>
          <Email>timgadinformatique@gmail.com</Email>
          <SocialMedia>
            <IconWrapper>
              <a
                href="https://www.instagram.com/timgad_informatique"
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon
                  style={{
                    color: "white",
                    margin: ".4em",
                    fontSize: "2em",
                    cursor: "pointer",
                  }}
                />
              </a>
            </IconWrapper>
            <IconWrapper>
              <a
                href="https://www.facebook.com/TIMGAD.INFORMATIQUE"
                rel="noreferrer"
                target="_blank"
              >
                <FacebookIcon
                  style={{
                    color: "white",
                    margin: ".4em",
                    fontSize: "2em",
                    cursor: "pointer",
                  }}
                />
              </a>
            </IconWrapper>
          </SocialMedia>
        </Middle>
        <Right>
          <SectionOne>
            <SectionOneTitle>about market</SectionOneTitle>
            <SectionOneLinks>About Us</SectionOneLinks>
            <SectionOneLinks>Contact Us</SectionOneLinks>
            <SectionOneLinks>Privacy Policy</SectionOneLinks>
          </SectionOne>
          <SectionTwo>
            <SectionTwoTitle>customer service</SectionTwoTitle>
            <SectionTwoLinks>Shipping Policy</SectionTwoLinks>
            <SectionTwoLinks>Return Policy</SectionTwoLinks>
            <SectionTwoLinks>My Account</SectionTwoLinks>
          </SectionTwo>
        </Right>
      </UpperSection>
      <BottomSection>
        <FooterDesc>
          TIMGAD INFORMATIQUE © 2023 Store. Made in 🇩🇿, All Rights Reserved.
          Designed by
          <Span>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.instagram.com/therealbahaa/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Baha Eddine
            </a>
          </Span>
        </FooterDesc>
      </BottomSection>
    </Container>
  )
}

export default Footer
