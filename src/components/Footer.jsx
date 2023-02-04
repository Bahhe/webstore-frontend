import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import logo from '../assests/images/logo.png'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  UpperSection,
  Left,
  Title,
  Desc,
  Middle,
  Address,
  PhoneNumber,
  Email,
  SocialMedia,
  Right,
  SectionOne,
  SectionOneTitle,
  SectionOneLinks,
  SectionTwo,
  SectionTwoTitle,
  SectionTwoLinks,
  BottomSection,
  FooterDesc,
  Span,
  IconWrapper,
  LogoImage,
} from './Footer.style'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <UpperSection>
        <Left>
          <Title onClick={() => navigate('/')}>
            <LogoImage src={logo} alt="logo" />
          </Title>
          <Desc>
            Timgad Informatique is an established business in the city of Batna,
            Algeria with over 20 years of experience in the sale and repair of
            laptops. Our highly-trained staff are dedicated to providing the
            highest quality services, ensuring customer satisfaction is our top
            priority ♥.️
          </Desc>
        </Left>
        <Middle>
          <Address>
            <a
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
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
                    color: '#007bff',
                    margin: '.4em',
                    fontSize: '2em',
                    cursor: 'pointer',
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
                    color: '#007bff',
                    margin: '.4em',
                    fontSize: '2em',
                    cursor: 'pointer',
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
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://www.instagram.com/therealbahaa/"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              Baha Eddine
            </a>
          </Span>
        </FooterDesc>
      </BottomSection>
    </Container>
  )
}

export default Footer
