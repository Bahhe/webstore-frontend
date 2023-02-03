import React, { useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MailIcon from '@mui/icons-material/Mail'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import { useState } from 'react'
import { useUpdateUserMutation } from '../../../features/users/usersApiSlice'
import { useNavigate } from 'react-router-dom'
import PulseLoader from 'react-spinners/PulseLoader'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import {
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
} from './EditUserForm.styles'

const EditUserForm = ({ user }) => {
  const [updateUser, { isSuccess, isLoading }] = useUpdateUserMutation()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState((user && user.firstName) || '')
  const [lastName, setLastName] = useState((user && user.lastName) || '')
  const [email, setEmail] = useState((user && user.email) || '')
  const [address, setAddress] = useState((user && user.address) || '')
  const [number, setNumber] = useState((user && user.number) || '')
  const [city, setCity] = useState((user && user.city) || '')

  useEffect(() => {
    if (isSuccess) {
      navigate('/admin/users')
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
              <PersonIcon style={{ marginRight: '1em', fontSize: '.9em' }} />
              {`${user.firstName} ${user.lastName}`}
            </ListItem>
            <ListItem>
              <MailIcon style={{ marginRight: '1em', fontSize: '.9em' }} />
              {user.email}
            </ListItem>
            <ListItem>
              <PhoneAndroidIcon
                style={{ marginRight: '1em', fontSize: '.9em' }}
              />
              {user.number || 'Not Provided'}
            </ListItem>
            <ListItem>
              <LocationSearchingIcon
                style={{ marginRight: '1em', fontSize: '.9em' }}
              />
              {user.address || 'Not Provided'}
            </ListItem>
            <ListItem>
              <LocationCityIcon
                style={{ marginRight: '1em', fontSize: '.9em' }}
              />
              {user.city || 'Not Provided'}
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
                    {isLoading ? <PulseLoader color="white" /> : 'udpate'}
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
