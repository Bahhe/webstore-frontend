import styled from 'styled-components'
import { mobile, tablet } from '../../../../assests/globalStyles/responsive'


const Content = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5em;
  ${tablet({
    flexDirection: 'column',
  })}
`
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1;
  ${mobile({
    width: '100%',
    marginTop: '1em',
  })}
`
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 5em;
  ${mobile({
    width: '85%',
    margin: '0',
  })}
`
const Title = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0 0 1em 0;
  cursor: pointer;
`
const Points = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  opacity: 0.8;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
`
const Price = styled.div`
  font-size: 1.7em;
  margin: 1em 0 1em 0;
`
const BtnsContainer = styled.div`
  display: flex;
`
const AddToCart = styled.div`
  text-transform: capitalize;
  text-align: center;
  width: 10em;
  height: 3em;
  padding: 1em;
  margin: 0 0.3em 0 0;
  background-color: #2e282a;
  color: white;
  border-radius: 0.5em;
  &:hover {
    background-color: white;
    color: #2e282a;
  }
  cursor: pointer;
  transition: 0.3s ease-in-out;
`
const ShopNow = styled.div`
  text-transform: capitalize;
  text-align: center;
  width: 10em;
  height: 3em;
  padding: 1em;
  background-color: white;
  border-radius: 0.5em;
  &:hover {
    background-color: #2e282a;
    color: white;
  }
  cursor: pointer;
  transition: 0.3s ease-in-out;
`

export {
  Content,
  ImgContainer,
  InfoContainer,
  Title,
  Points,
  Price,
  BtnsContainer,
  AddToCart,
  ShopNow
}