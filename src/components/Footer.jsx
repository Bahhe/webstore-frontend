import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assests/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Container,
  UpperSection,
  Left,
  Title,
  Desc,
  Middle,
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
} from "./Footer.style";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <UpperSection>
        <Left>
          <Title onClick={() => navigate("/")}>
            <LogoImage src={logo} alt="logo" />
          </Title>
          <Desc>
            Black Beard is a premier laptop business located in Batna, Algeria.
            We offer a wide selection of the latest laptops from top brands such
            as Dell, HP, and Apple. Our laptops are carefully selected to meet
            the needs of students, professionals, and gamers alike. With our
            easy-to-use platform, customers can browse and purchase laptops with
            just a few clicks. Our team of experts is available to answer any
            questions and provide support throughout the purchasing process.
            Experience fast and reliable shipping, top-notch customer service,
            and a hassle-free shopping experience with Black Beard. Get your
            dream laptop today ♥.️
          </Desc>
        </Left>
        <Middle>
          <PhoneNumber>+213 - 0666103710</PhoneNumber>
          <Email>marchelldteach@gmail.com</Email>
          <SocialMedia>
            <IconWrapper>
              <a
                href="https://www.instagram.com/blackbeardte/"
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon
                  style={{
                    color: "#000",
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
          BlackBeard © 2023 Store. Made in 🇩🇿, All Rights Reserved. Designed by
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
  );
};

export default Footer;
