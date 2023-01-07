import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../../../assests/globalStyles/responsive"

const Container = styled.div`
  justify-content: center;
  width: 100%;
  margin: 5em 0;
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 20em);
  grid-template-areas:
    "allInOne gaming gaming pcTablet"
    "allInOne chromebook macs macs";
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`
const AllInOne = styled.div`
  background: url("https://www.apple.com/v/imac-24/g/images/why-mac/hero_why_mac__epb9a0jlsu82_large.png");
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
  ${mobile({
    height: "10em",
  })}
`
const PcTablet = styled.div`
  background: url("https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
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
  ${mobile({
    height: "10em",
  })}
`
const Gaming = styled.div`
  background: url("https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Alienware_m17_R5_header.jpg");
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
  ${mobile({
    height: "10em",
  })}
`
const ChromeBook = styled.div`
  background: url("https://images.unsplash.com/photo-1613432760965-f106c65b5a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80");
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
  ${mobile({
    height: "10em",
  })}
`
const Macs = styled.div`
  background: url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80");
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
  ${mobile({
    height: "10em",
  })}
`
const Categories = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <AllInOne onClick={() => navigate("/shop?category=allInOne")}>
        all in one
      </AllInOne>
      <PcTablet onClick={() => navigate("/shop?category=tablet")}>
        tablet pc
      </PcTablet>
      <Gaming onClick={() => navigate("/shop?category=gaming")}>
        gaming pc
      </Gaming>
      <ChromeBook onClick={() => navigate("/shop?category=chromebook")}>
        chromebook
      </ChromeBook>
      <Macs onClick={() => navigate("/shop?category=apple")}>apple</Macs>
    </Container>
  )
}

export default Categories
