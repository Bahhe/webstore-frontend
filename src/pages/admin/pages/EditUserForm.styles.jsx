import styled from 'styled-components'

const Container = styled.div`
  margin: 10em 10em 0 15%;
  width: 70%;
`
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Title = styled.div`
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 500;
`
const CreateButton = styled.button`
  text-transform: uppercase;
  background-color: #0ae;
  border: none;
  border-radius: 0.2em;
  padding: 0.5em 1em;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
`
const Info = styled.div`
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
  margin: 1em;
  padding: 1em;
  flex: 0.5;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`
const Img = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  margin: 0 1em 0 0;
`
const NameAndLastName = styled.div``
const Name = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  text-transform: capitalize;
`
const LastName = styled.div`
  font-weight: 500;
  text-transform: capitalize;
  opacity: 0.6;
`
const Edit = styled.div`
  flex: 1;
  margin: 1em;
  border-radius: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  padding: 1em;
  margin: 1em;
`

const Content = styled.div`
  width: 80%;
  display: flex;
`
const Details = styled.div`
  margin: 1em;
`
const ListTitle = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  opacity: 0.6;
  margin-bottom: 1em;
`
const ListItem = styled.div`
  margin-left: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  opacity: 0.7;
`

const Left = styled.div`
  margin: 1em;
`

const ButtonSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  text-transform: capitalize;
  opacity: 0.6;
  font-weight: 500;
`

const Input = styled.input`
  margin-bottom: 1em;
  border: none;
  border-bottom: 1px solid black;
  width: 20em;
  font-size: 1em;
  padding: 0.5em 0 0.5em 0.5em;
  outline: none;
  opacity: 0.8;
`

export {
  Container,
  Header,
  Title,
  CreateButton,
  Info,
  UserInfo,
  Img,
  NameAndLastName,
  Name,
  LastName,
  Edit,
  Content,
  Details,
  ListTitle,
  ListItem,
  Left,
  ButtonSection,
  Button,
  Form,
  Label,
  Input,
}
