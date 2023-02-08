import styled, { keyframes } from 'styled-components'
import {
  mobile,
  smallLaptop,
  tablet,
} from '../../../../assests/globalStyles/responsive'

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoContainer = styled.div`
  width: 80%;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 70%;
  ${mobile({
    width: '90%',
  })}
  ${tablet({
    width: '70%',
  })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tablet({
    justifyContent: 'start',
  })}
`
const Title = styled.h1`
  font-weight: 800;
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  margin: 1em 0;
  ${smallLaptop({
    fontSize: '2em',
  })}
  ${tablet({
    fontSize: '1.6em',
  })}
`
const Desc = styled.p`
  width: 30ch;
  font-weight: 400;
  font-size: 1.4em;
  text-transform: uppercase;
  word-spacing: 0.4em;
  color: #ffffffbc;
  ${tablet({
    width: '100%',
    fontSize: '.9em',
  })}
  ${smallLaptop({
    fontSize: '1em',
  })}
`

const glowing = keyframes`
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  `

const Button = styled.button`
  text-transform: uppercase;
  margin: 2em 0;
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }
  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:active {
    color: #000;
  }
  &:active:after {
    background: transparent;
  }
  &:hover:before {
    opacity: 1;
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`

export {
  Left,
  InfoContainer,
  ImageContainer,
  Right,
  Title,
  Desc,
  Button
}