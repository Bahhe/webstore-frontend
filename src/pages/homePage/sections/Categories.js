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
  background: url("https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/allInOne.webp?alt=media&token=3c9ac610-087c-4485-9923-fe9c832af0c3");
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
  background: url("https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/tablet.webp?alt=media&token=4bcf0d32-554f-492b-9aa4-d381ae5dc164");
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
  background: url("https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/gaming.webp?alt=media&token=3165074d-d7b4-49ad-90de-e4b0ad73df45");
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
  background: url("https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/chromebook.webp?alt=media&token=eea20a70-f059-461a-aab0-539801332ef7");
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
  background: url("https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/apple.webp?alt=media&token=a5438ed1-b1a0-4a3c-92d1-f4d595472a61");
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
