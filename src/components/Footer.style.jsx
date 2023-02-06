import styled from 'styled-components'
import { tablet } from '../assests/globalStyles/responsive'

const Container = styled.footer`
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  color: #fff;
`

const UpperSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 3em 3em 3em;
  ${tablet({
    flexDirection: 'column',
    margin: '9em 3em 3em 3em',
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
  color: rgba(255, 255, 255, 0.5);
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
  color: rgba(255, 255, 255, 0.5);
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
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 0.8em 0;
`
const SocialMedia = styled.div`
  margin-top: 1em;
  display: flex;
`

const Right = styled.section`
  flex: 1;
  display: flex;
  color: rgba(255, 255, 255, 0.5);
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
  color: rgba(255, 255, 255, 0.5);
`
const Span = styled.span`
  color: white;
  cursor: pointer;
`
const IconWrapper = styled.div``

const LogoImage = styled.img`
  width: 20%;
  ${tablet({
    width: '50%',
  })}
`

export {
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
}
