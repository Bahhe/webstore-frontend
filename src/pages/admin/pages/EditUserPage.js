import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 10em 10em 0 15%;
  width: 100%;
`
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Title = styled.div`
  text-transform: capitalize;
  font-size: 2em;
  font-weight: 500;
`
const CreateButton = styled.button`
  text-transform: capitalize;
  background-color: green;
  border: none;
  border-radius: 0.2em;
  padding: 0.5em 1em;
  font-size: 1.2em;
  color: white;
`
const Info = styled.div`
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
  margin: 1em;
  padding: 1em;
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
  opacity: 0.7;
`
const Edit = styled.div``

const EditUserPage = () => {
  return (
    <Container>
      <Header>
        <Title>edit user</Title>
        <CreateButton>create</CreateButton>
      </Header>
      <Info>
        <UserInfo>
          <Img src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1947&q=80" />
          <NameAndLastName>
            <Name>baha eddine</Name>
            <LastName>guerri</LastName>
          </NameAndLastName>
        </UserInfo>
      </Info>
      <Edit></Edit>
    </Container>
  )
}

export default EditUserPage
