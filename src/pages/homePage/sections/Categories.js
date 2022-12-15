import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  justify-content: center;
  width: 100%;
  margin: 5em 0;
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 20em);
  grid-template-areas:
    'allInOne gaming gaming pcTablet'
    'allInOne chromebook macs macs';
`
const AllInOne = styled.div`
  background: url('https://images.unsplash.com/photo-1612814824743-c760091da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
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
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
`
const PcTablet = styled.div`
  background: url('https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
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
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
`
const Gaming = styled.div`
  background: url('https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Alienware_m17_R5_header.jpg');
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
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
`
const ChromeBook = styled.div`
  background: url('https://images.unsplash.com/photo-1613432760965-f106c65b5a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80');
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
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
`
const Macs = styled.div`
  background: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80');
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
  &:hover {
    color: black;
    background: none;
    cursor: pointer;
  }
`
const Categories = () => {
  return (
    <Container>
      <AllInOne>
        <Link to="/shop?category=allInOne">all in one</Link>
      </AllInOne>
      <PcTablet>
        <Link to="/shop?category=tabletPc">tablet pc</Link>
      </PcTablet>
      <Gaming>
        <Link to="/shop?category=gamingPc">gaming pc</Link>
      </Gaming>
      <ChromeBook>
        <Link to="/shop?category=chromebook">chromebook</Link>
      </ChromeBook>
      <Macs>
        <Link to="/shop?category=macs">macs</Link>
      </Macs>
    </Container>
  )
}

export default Categories
