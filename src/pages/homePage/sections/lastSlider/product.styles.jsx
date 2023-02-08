import styled from 'styled-components'

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  background-color: white;
  border-radius: 1em;
`

const Links = styled.div`
  margin: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const LinksContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  transition: 0.5s ease;
  transform: translateY(15%);
  z-index: -1;
`
const Container = styled.div`
  height: 30em;
  margin: 1em;
  &:hover ${LinksContainer} {
    opacity: 1;
    transform: translateY(-2%);
    z-index: 2;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  height: 60%;
  background-image: radial-gradient(
    circle 879px at 10.4% 22.3%,
    rgba(255, 235, 238, 1) 0%,
    rgba(186, 190, 245, 1) 93.6%
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
`
const Title = styled.div`
  text-transform: capitalize;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  margin: 2em 0 1em 0;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`
const Price = styled.div`
  text-align: center;
  opacity: 0.9;
  color: red;
`
const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
`

export {
  LinksWrapper,
  Links,
  LinksContainer,
  Container,
  ImgContainer,
  Title,
  Price,
  StarsContainer
}