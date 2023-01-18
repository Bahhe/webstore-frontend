import React from "react"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import styled from "styled-components"
import { mobile } from "../../../assests/globalStyles/responsive"

const Container = styled.div`
font-weight:300;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 4em 0;
  ${mobile({
    flexDirection: "column",
    width: "80%",
  })}
`
const Left = styled.div`
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  background-color: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  border-radius: 1em;
  &:hover {
    color: rgba(0, 0, 0, 0.2);
  }
  ${mobile({
    width: "100%",
    justifyContent: "left",
  })}
`
const Middle = styled.div`
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  flex: 1;
  height: 3em;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.2);
  }
  ${mobile({
    width: "100%",
    justifyContent: "left",
  })}
`
const Right = styled.div`
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  flex: 1;
  height: 3em;
  background-color: rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.2);
  }
  ${mobile({
    width: "100%",
    justifyContent: "left",
  })}
`

const AfterSale = () => {
  return (
    <Container>
      <Left>
        <LocalShippingIcon style={{ margin: ".5em", color: "rgba(0, 0, 0, 0.5)" }} />
        Get Your Order Shipped To You In Any Place In Algeria
      </Left>
      <Middle>
        <AttachMoneyIcon style={{ margin: ".5em", color: "rgba(0, 0, 0, 0.5)" }} />
        Our Products Are Guaranteed
      </Middle>
      <Right>
        <QuestionMarkIcon style={{ margin: ".5em", color: "rgba(0, 0, 0, 0.5)" }} />
        After Sale Services
      </Right>
    </Container>
  )
}

export default AfterSale
