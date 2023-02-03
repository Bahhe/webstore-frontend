import { mobile } from "../../../assests/globalStyles/responsive"
import styled from "styled-components"

const Container = styled.main`
  width: 80%;
  position: relative;
  padding-top: 10em;
  padding-bottom: 10em;
`
const Section = styled.section`
  width: 100%;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: "column",
  })}
`
const Title = styled.h1`
  width: 100%;
  font-size: 2.5em;
  text-transform: capitalize;
  padding: 0.5em 0;
  font-weight: 400;
`
const Left = styled.form`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const Right = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const SectionTitle = styled.h1`
  font-size: 1.3em;
  text-transform: uppercase;
  padding: 1em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 0.7;
`
const SmallTitle = styled.label`
  text-transform: capitalize;
  font-weight: 500;
  opacity: 0.9;
`
const Input = styled.input`
  width: 100%;
  height: 2.9em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1em 0;
`
const RadioButton = styled.div`
  margin: 2em 0;
  display: flex;
`
const Label = styled.label`
  margin: 0 0 0 1em;
  text-transform: capitalize;
  opacity: 0.9;
`
const Radio = styled.input`
  width: 2em;
  border: none;
`
const Button = styled.button`
  width: 7em;
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #333;
  border: none;
  color: white;
  text-align: center;
  padding: 0.7em;
  margin: 1em 0;
  cursor: pointer;
  margin: 0 1em 0 0;
  &:disabled {
    opacity: 0.5;
  }
`
const Desc = styled.p`
  font-size: 0.9em;
  opacity: 0.8;
  padding: 1em 0;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export {
  Container,
  Section,
  Title,
  Left,
  Right,
  SectionTitle,
  SmallTitle,
  Input,
  RadioButton,
  Label,
  Radio,
  Button,
  Desc,
  Wrapper,
}