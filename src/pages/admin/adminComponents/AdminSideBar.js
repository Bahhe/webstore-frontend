import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'
import {
  Analytics,
  AnalyticsOutlined,
  Feedback,
  Inventory,
  Mail,
  ManageAccounts,
  Message,
  Money,
  Paid,
  Person,
  Report,
} from '@mui/icons-material'

const Container = styled.div`
  padding: 2em;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  position: fixed;
  left: 0;
  top: 8%;
  width: 13%;
`
const Title = styled.div`
  margin: 1.5em 0 0 0;
  font-size: 0.9em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
  text-transform: capitalize;
`
const ListItem = styled.div`
  margin: 0.5em;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
`

const AdminSideBar = () => {
  return (
    <Container>
      <Title>dashboard</Title>
      <ListItem>
        <HomeIcon style={{ marginRight: '0.2em' }} />
        home
      </ListItem>
      <ListItem>
        <AnalyticsOutlined style={{ marginRight: '0.2em' }} />
        analytics
      </ListItem>
      <ListItem>
        <Money style={{ marginRight: '0.2em' }} />
        sales
      </ListItem>
      <Title>quick menu</Title>
      <ListItem>
        <Person style={{ marginRight: '0.2em' }} />
        users
      </ListItem>
      <ListItem>
        <Inventory style={{ marginRight: '0.2em' }} />
        products
      </ListItem>
      <ListItem>
        <Paid style={{ marginRight: '0.2em' }} />
        transactions
      </ListItem>
      <ListItem>
        <Report style={{ marginRight: '0.2em' }} />
        reports
      </ListItem>
      <Title>notifications</Title>
      <ListItem>
        <Mail style={{ marginRight: '0.2em' }} />
        mail
      </ListItem>
      <ListItem>
        <Feedback style={{ marginRight: '0.2em' }} />
        feedBack
      </ListItem>
      <ListItem>
        <Message style={{ marginRight: '0.2em' }} />
        messages
      </ListItem>
      <Title>staff</Title>
      <ListItem>
        <ManageAccounts style={{ marginRight: '0.2em' }} />
        manage
      </ListItem>
      <ListItem>
        <Analytics style={{ marginRight: '0.2em' }} />
        analytics
      </ListItem>
      <ListItem>
        <Report style={{ marginRight: '0.2em' }} />
        reports
      </ListItem>
    </Container>
  )
}

export default AdminSideBar
