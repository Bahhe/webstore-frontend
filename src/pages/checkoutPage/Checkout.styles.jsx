import { mobile } from '../../assests/globalStyles/responsive'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1em 0;
  width: 90%;
  margin: 0 auto;
`
const PageTitle = styled.div`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  margin: 4em 0 0 1em;
`
const SmallTitle = styled.div`
  margin: 2em 0 1em 0;
  font-size: 1.4em;
  font-weight: 500;
  text-transform: capitalize;
`
const SectionsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: 'column',
  })}
`
const LeftSection = styled.form`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  flex: 4;
  padding: 2em 0 0 0;
`
const RightSection = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  flex: 2;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
`
const Label = styled.label`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1em;
  margin: 0 0 0.5em 0;
  color: rgba(0, 0, 0, 0.8);
`
const InputField = styled.input`
  padding: 0.9em 0;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
`
const Shipping = styled.div`
  width: 100%;
`
const Title = styled.div`
  margin: 2em 0 1em 0;
  font-size: 1.4em;
  font-weight: 500;
  text-transform: capitalize;
`
const Wrapper = styled.div`
  display: flex;
  padding: 1em 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.9);
  text-transform: capitalize;
`
const ButtonContainer = styled.div`
  width: 100%;
  text-align: end;
`
const Button = styled.button`
  font-size: 1.2em;
  text-transform: capitalize;
  font-weight: 500;
  color: white;
  border: none;
  background-color: #333;
  padding: 0.7em 2em;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`
const RightSectionContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1em 0 0 1em;
`
const Desc = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`
const Select = styled.select`
  padding: 1em;
  text-transform: capitalize;
  font-weight: 500;
  border: none;
  border-radius: 50px;
`
const Option = styled.option``

export {
  Container,
  PageTitle,
  SmallTitle,
  SectionsContainer,
  LeftSection,
  RightSection,
  InputContainer,
  Label,
  InputField,
  Shipping,
  Title,
  Wrapper,
  ButtonContainer,
  Button,
  RightSectionContainer,
  Select,
  Option,
  Desc,
}
