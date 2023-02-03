import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 500;
`
const Edit = styled.div`
  margin: 1em;
  border-radius: 1em;
  box-shadow: 0 0 20px #ccc;
  padding: 1em;
  width: 45em;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const ContentWrapper = styled.div`
  margin: 1em;
`
const FormOne = styled.section`
  flex: 1;
  margin: 1em;
  display: flex;
  flex-direction: column;
`
const FormTwo = styled.section`
  flex: 1;
  margin: 1em;
  display: flex;
  flex-direction: column;
`
const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 15em;
`

const ImageInput = styled.input`
  margin: 1em 0;
  width: 15em;
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
  box-shadow: 0 0 5px #ccc;
`
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

const InStock = styled.input`
  margin: 1em 0;
`

const Sections = styled.section`
  margin: 1em;
  display: flex;
  flex-direction: column;
`
const SectionName = styled.label`
  margin-right: 1em;
  width: 9em;
  text-transform: capitalize;
  font-weight: 500;
`
const SectionInput = styled.input`
  margin-right: 2em;
`
const Select = styled.select`
  margin: 0 0 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  padding: 1em;
  background-color: transparent;
  box-shadow: 0 0 5px #ccc;
`
const Option = styled.option``

const ProductImage = styled.img`
  width: 10em;
  aspect-ratio: 4/3;
  background-color: rgba(0, 0, 0, 0.03);
  margin: 1em;
`

export {
  Container,
  Header,
  Title,
  Edit,
  Content,
  ContentWrapper,
  FormOne,
  FormTwo,
  ImageSection,
  ImageInput,
  Button,
  Form,
  Label,
  Input,
  InputWrapper,
  InStock,
  Sections,
  SectionName,
  SectionInput,
  Select,
  Option,
  ProductImage,
}