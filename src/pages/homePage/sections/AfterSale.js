import React from "react"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import styled from "styled-components"
import { mobile } from "../../../assests/globalStyles/responsive"

const Container = styled.div`
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  &:hover {
    color: orange;
  }
  ${mobile({
    width: "100%",
    justifyContent: "left",
  })}
`
const Middle = styled.div`
  flex: 1;
  height: 3em;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: orange;
  }
  ${mobile({
    width: "100%",
    justifyContent: "left",
  })}
`
const Right = styled.div`
  flex: 1;
  height: 3em;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: orange;
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
        <LocalShippingIcon style={{ margin: ".5em", color: "orange" }} />
        FREE shipping on orders over $50
      </Left>
      <Middle>
        <AttachMoneyIcon style={{ margin: ".5em", color: "orange" }} />
        30 DAYs money back guarantee
      </Middle>
      <Right>
        <QuestionMarkIcon style={{ margin: ".5em", color: "orange" }} />
        Service ONLINE support 24 hours on day
      </Right>
    </Container>
  )
}

export default AfterSale
