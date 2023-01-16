import React, { useEffect } from "react"
import styled from "styled-components"
import PersonIcon from "@mui/icons-material/Person"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import MailIcon from "@mui/icons-material/Mail"
import LocationSearchingIcon from "@mui/icons-material/LocationSearching"
import { useState } from "react"
import { useUpdateUserMutation } from "../../../features/users/usersApiSlice"
import { useNavigate } from "react-router-dom"
import PulseLoader from "react-spinners/PulseLoader"
import LocationCityIcon from "@mui/icons-material/LocationCity"

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
  border-radius: .5em;
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

const EditUserForm = ({ user }) => {
  const [updateUser, { isSuccess, isLoading }] = useUpdateUserMutation()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState((user && user.firstName) || "")
  const [lastName, setLastName] = useState((user && user.lastName) || "")
  const [email, setEmail] = useState((user && user.email) || "")
  const [address, setAddress] = useState((user && user.address) || "")
  const [number, setNumber] = useState((user && user.number) || "")
  const [city, setCity] = useState((user && user.city) || "")

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/users")
    }
  }, [isSuccess, navigate])

  const onFirstNameChanged = (e) => {
    setFirstName(e.target.value)
  }

  const onLastNameChanged = (e) => {
    setLastName(e.target.value)
  }

  const onEmailChanged = (e) => {
    setEmail(e.target.value)
  }

  const onSubmitClicked = async (e) => {
    e.preventDefault()
    await updateUser({
      id: user.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      number: number,
      city: city,
    })
  }
  if (!user) {
    return <PulseLoader />
  }

  return (
    <Container>
      <Header>
        <CreateButton onClick={() => navigate(`/admin/user/create`)}>
          create
        </CreateButton>
      </Header>
      <Content>
        <Info>
          <UserInfo>
            <Img src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae" />
            <NameAndLastName>
              <Name>{user.firstName}</Name>
              <LastName>{user.lastName}</LastName>
            </NameAndLastName>
          </UserInfo>
          <Details>
            <ListTitle>account details</ListTitle>
            <ListItem>
              <PersonIcon style={{ marginRight: "1em", fontSize: ".9em" }} />
              {`${user.firstName} ${user.lastName}`}
            </ListItem>
            <ListItem>
              <MailIcon style={{ marginRight: "1em", fontSize: ".9em" }} />
              {user.email}
            </ListItem>
            <ListItem>
              <PhoneAndroidIcon
                style={{ marginRight: "1em", fontSize: ".9em" }}
              />
              {user.number || "Not Provided"}
            </ListItem>
            <ListItem>
              <LocationSearchingIcon
                style={{ marginRight: "1em", fontSize: ".9em" }}
              />
              {user.address || "Not Provided"}
            </ListItem>
            <ListItem>
              <LocationCityIcon
                style={{ marginRight: "1em", fontSize: ".9em" }}
              />
              {user.city || "Not Provided"}
            </ListItem>
          </Details>
        </Info>
        <Edit>
          <Title>edit</Title>
          <Content>
            <Left>
              <Form onSubmit={onSubmitClicked}>
                <Label>first name</Label>
                <Input
                  value={firstName}
                  onChange={onFirstNameChanged}
                  placeholder="baha eddine"
                />
                <Label>last name</Label>
                <Input
                  value={lastName}
                  onChange={onLastNameChanged}
                  placeholder="guerri"
                />
                <Label>email</Label>
                <Input
                  value={email}
                  onChange={onEmailChanged}
                  placeholder="marchelldteach@gmail.com"
                />
                <Label>phone number</Label>
                <Input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="+213 666 103 710"
                />
                <Label>address</Label>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 main street"
                />
                <Label>city</Label>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="batna"
                />
                <ButtonSection>
                  <Button>
                    {isLoading ? <PulseLoader color="white" /> : "udpate"}
                  </Button>
                </ButtonSection>
              </Form>
            </Left>
          </Content>
        </Edit>
      </Content>
    </Container>
  )
}

export default EditUserForm
