import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { tablet } from '../../../assests/globalStyles/responsive'
import allInOne from '../../../assests/images/allInOne.webp'
import gaming from '../../../assests/images/gaming.webp'
import Tablet from '../../../assests/images/tablet.webp'
import chromebook from '../../../assests/images/chromebook.webp'
import apple from '../../../assests/images/apple.webp'

const Container = styled.div`
  justify-content: center;
  width: 80%;
  margin: 5em auto;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 20em);
  grid-template-areas:
    'allInOne gaming gaming pcTablet'
    'allInOne chromebook macs macs';
  ${tablet({
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '0 auto',
  })}
`
const AllInOne = styled.div`
  background: url(${allInOne});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-area: allInOne;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-size: 2em;
  text-transform: capitalize;
  font-weight: 600;
  transition: 0.5s ease;
  border-radius: 0.5em;
  box-shadow: 0 0 30px #ccc;
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
  ${tablet({
    height: '10em',
  })}
`
const PcTablet = styled.div`
  background: url(${Tablet});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-area: pcTablet;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-size: 2em;
  text-transform: capitalize;
  font-weight: 600;
  transition: 0.5s ease;
  border-radius: 0.5em;
  box-shadow: 0 0 30px #ccc;
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
  ${tablet({
    height: '10em',
  })}
`
const Gaming = styled.div`
  background: url(${gaming});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-area: gaming;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-size: 2em;
  text-transform: capitalize;
  font-weight: 600;
  transition: 0.5s ease;
  border-radius: 0.5em;
  box-shadow: 0 0 30px #ccc;
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
  ${tablet({
    height: '10em',
  })}
`
const ChromeBook = styled.div`
  background: url(${chromebook});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-area: chromebook;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-size: 2em;
  text-transform: capitalize;
  font-weight: 600;
  transition: 0.5s ease;
  border-radius: 0.5em;
  box-shadow: 0 0 30px #ccc;
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
  ${tablet({
    height: '10em',
  })}
`
const Macs = styled.div`
  background: url(${apple});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-area: macs;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-size: 2em;
  text-transform: capitalize;
  font-weight: 600;
  transition: 0.5s ease;
  border-radius: 0.5em;
  box-shadow: 0 0 30px #ccc;
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
  ${tablet({
    height: '10em',
  })}
`
const Categories = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <AllInOne onClick={() => navigate('/shop?category=allInOne')}>
        all in one
      </AllInOne>
      <PcTablet onClick={() => navigate('/shop?category=tablet')}>
        tablet pc
      </PcTablet>
      <Gaming onClick={() => navigate('/shop?category=gaming')}>
        gaming pc
      </Gaming>
      <ChromeBook onClick={() => navigate('/shop?category=chromebook')}>
        chromebook
      </ChromeBook>
      <Macs onClick={() => navigate('/shop?category=apple')}>apple</Macs>
    </Container>
  )
}

export default Categories
