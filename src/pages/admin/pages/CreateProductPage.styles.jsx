import styled from "styled-components"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4em;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 500;
`
const Edit = styled.section`
  margin: 1em;
  border-radius: 1em;
  box-shadow: 0 0 20px #ccc;
  padding: 1em;
  width: 45em;
  overflow: hidden;;
`

const Content = styled.section`
  display: flex;
`

const Left = styled.section`
  margin: 1em;
`

const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 2em 0;
  width: 15em;
`

const ImageInput = styled.input``

const FormOne = styled.section`
  display: flex;
  flex-direction: column;
`
const FormTwo = styled.section`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  font-size: 1.2em;
  padding: 0.5em 2em;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
  box-shadow: 0 0 5px #4a4a4a;
  &:disabled {
    opacity: 0.5;
  }
`

const Form = styled.form`
  display: flex;
  gap: 5em;
`

const Label = styled.label`
  text-transform: capitalize;
  opacity: 0.9;
  font-weight: 500;
  margin: 0 0 0.5em 0;
`

const Input = styled.input`
  margin-bottom: 1em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  width: 20em;
  font-size: 1em;
  padding: 0.5em 0 0.5em 0.5em;
  outline: none;
  opacity: 0.8;
  background-color: transparent;
  box-shadow: 0 0 5px #ccc;
  &::placeholder {
    opacity: 0.7;
  }
`
const InStock = styled.input`
  margin: 1em 0;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Sections = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em;
`
const SectionName = styled.label`
  width: 7em;
  margin: 0.5em 0;
  font-weight: 500;
  text-transform: capitalize;
`
const SectionInput = styled.input`
  margin-right: 2em;
`
const Select = styled.select`
  margin: 0 0 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 0.5em;
  font-weight: 500;
  background-color: transparent;
  box-shadow: 0 0 5px #ccc;
`
const Option = styled.option``

export {
  Container,
  Title,
  Edit,
  Content,
  Left,
  ImageSection,
  ImageInput,
  FormOne,
  FormTwo,
  Button,
  Form,
  Label,
  Input,
  InStock,
  Wrapper,
  Sections,
  SectionName,
  SectionInput,
  Select,
  Option
}