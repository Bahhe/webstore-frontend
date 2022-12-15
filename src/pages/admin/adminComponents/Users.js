import { Visibility } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  margin: 1em;
  padding: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
`
const Title = styled.div`
  font-size: 1.5em;
  text-transform: capitalize;
  font-weight: 500;
`
const UsersList = styled.div``
const User = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0 0 0;
`
const Image = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
const UserInfo = styled.div`
  margin: 0 0 0 1em;
`
const Name = styled.div`
  text-transform: capitalize;
  font-size: 0.9em;
  font-weight: 500;
`
const Job = styled.div`
  text-transform: capitalize;
  font-size: 0.9em;
  opacity: 0.8;
`
const Display = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 4em;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1em;
  opacity: 0.7;
  text-transform: capitalize;
`
const Right = styled.div`
  margin: 1em;
  padding: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
`
const Table = styled.div`
  padding: 0.5em;
`
const TableTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
`
const SmallTitle = styled.div`
  text-align: start;
  font-weight: 500;
`
const Date = styled.div`
  text-align: start;
  width: 15em;
  opacity: 0.7;
`
const Amount = styled.div`
  text-align: start;
  width: 15em;
  opacity: 0.7;
`
const Status = styled.div`
  text-align: start;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
  border-radius: 1em;
  text-transform: capitalize;
  color: green;
`
const UserItem = styled.div`
  text-align: start;
  display: flex;
  align-items: center;
  width: 15em;
`

const Users = () => {
  return (
    <Container>
      <Left>
        <Title>new join members</Title>
        <UsersList>
          <User>
            <Image src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80" />
            <UserInfo>
              <Name>baha eddine</Name>
              <Job>software engineer</Job>
            </UserInfo>
            <Display>
              <Visibility style={{ margin: '0 .4em 0 0' }} />
              display
            </Display>
          </User>
          <User>
            <Image src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80" />
            <UserInfo>
              <Name>baha eddine</Name>
              <Job>software engineer</Job>
            </UserInfo>
            <Display>
              <Visibility style={{ margin: '0 .4em 0 0' }} />
              display
            </Display>
          </User>
          <User>
            <Image src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80" />
            <UserInfo>
              <Name>baha eddine</Name>
              <Job>software engineer</Job>
            </UserInfo>
            <Display>
              <Visibility style={{ margin: '0 .4em 0 0' }} />
              display
            </Display>
          </User>
          <User>
            <Image src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80" />
            <UserInfo>
              <Name>baha eddine</Name>
              <Job>software engineer</Job>
            </UserInfo>
            <Display>
              <Visibility style={{ margin: '0 .4em 0 0' }} />
              display
            </Display>
          </User>
        </UsersList>
      </Left>
      <Right>
        <Title>latest transactions</Title>
        <Table>
          <TableTitle>
            <SmallTitle style={{ width: '15em' }}>Customer</SmallTitle>
            <SmallTitle style={{ width: '15em' }}>Date</SmallTitle>
            <SmallTitle style={{ width: '15em' }}>Amount</SmallTitle>
            <SmallTitle>Status</SmallTitle>
          </TableTitle>
          <User>
            <UserItem>
              <Image
                style={{ margin: '0 1em 0 0' }}
                src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80"
              />
              <Name>baha eddine</Name>
            </UserItem>
            <Date>2 jun 2022</Date>
            <Amount>$100</Amount>
            <Status>approved</Status>
          </User>
          <User>
            <UserItem>
              <Image
                style={{ margin: '0 1em 0 0' }}
                src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80"
              />
              <Name>baha eddine</Name>
            </UserItem>
            <Date>2 jun 2022</Date>
            <Amount>$100</Amount>
            <Status>approved</Status>
          </User>
          <User>
            <UserItem>
              <Image
                style={{ margin: '0 1em 0 0' }}
                src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80"
              />
              <Name>baha eddine</Name>
            </UserItem>
            <Date>2 jun 2022</Date>
            <Amount>$100</Amount>
            <Status>approved</Status>
          </User>
          <User>
            <UserItem>
              <Image
                style={{ margin: '0 1em 0 0' }}
                src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80"
              />
              <Name>baha eddine</Name>
            </UserItem>
            <Date>2 jun 2022</Date>
            <Amount>$100</Amount>
            <Status>approved</Status>
          </User>
        </Table>
      </Right>
    </Container>
  )
}

export default Users
