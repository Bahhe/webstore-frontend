import styled from 'styled-components'
import { laptop } from '../../../../assests/globalStyles/responsive'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 5em;
  ${laptop({
    padding: '0',
  })}
`
const Left = styled.section`
  margin: 1em;
  padding: 1em;
  box-shadow: 0 0 20px #ccc;
  border-radius: 1em;
  border: 1px solid rgba(0, 0, 0, 0.15);
`
const Title = styled.h1`
  font-size: 1.5em;
  text-transform: capitalize;
  font-weight: 500;
`
const UsersList = styled.div`
  height: 56vh;
  overflow-y: auto;
  padding: 0 1em;
`

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0 0 0;
  padding: 0.2em;
  border-radius: 1em;
  background: linear-gradient(
    90deg,
    rgba(230, 220, 220, 1) 0%,
    rgba(255, 255, 255, 0.6783088235294117) 100%
  );
`
const Image = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
const UserInfo = styled.div`
  margin: 0 0 0 1em;
`
const Name = styled.h2`
  text-transform: capitalize;
  font-size: 0.9em;
  font-weight: 500;
`
const Display = styled.button`
  border: none;
  display: flex;
  align-items: center;
  margin: 0 0 0 4em;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1em;
  opacity: 0.7;
  text-transform: capitalize;
  cursor: pointer;
`
const Right = styled.section`
  margin: 1em;
  padding: 1em;
  box-shadow: 0 0 20px #ccc;
  border-radius: 1em;
  border: 1px solid rgba(0, 0, 0, 0.15);
`
const Table = styled.section`
  overflow-y: auto;
  height: 10em;
  padding: 0 2em 2em 2em;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Statistics = styled.section`
  padding: 2em 1em;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  ${laptop({
    width: 'auto',
    justifyContent: 'space-evenly',
  })}
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 2em 3em;
  border-radius: 1em;
  box-shadow: 0 0 20px #ccc;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.15);
`
const ItemName = styled.h3`
  font-weight: 400;
  font-size: 1.2em;
  opacity: 0.9;
  text-transform: capitalize;
  color: #363670;
`
const ItemQuantity = styled.p`
  display: flex;
  align-items: center;
  font-size: 2em;
  font-weight: 400;
  margin: 0.5em;
  color: #363670;
`
const DashboardWrapper = styled.div``

const Chart = styled.section`
  margin: 1em;
  padding: 1em;
  box-shadow: 0 0 20px #ccc;
  border-radius: 1em;
`

export {
  Container,
  Left,
  Title,
  UsersList,
  User,
  Image,
  UserInfo,
  Name,
  Display,
  Right,
  Table,
  Wrapper,
  Statistics,
  Item,
  ItemName,
  ItemQuantity,
  DashboardWrapper,
  Chart,
}