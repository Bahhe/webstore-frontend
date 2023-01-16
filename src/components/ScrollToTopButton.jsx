import { ArrowUpward } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 1em;
  height: 1em;
  bottom: 1em;
  right: 1em;
  background-color: #333;
  border: none;
  color: white;
  font-size: 3em;
  cursor: pointer;
`

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setVisible(true) : setVisible(false)
    }
    window.addEventListener("scroll", handleScrollButtonVisibility)
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility)
    }
  }, [])
  return (
    <>
      {visible && (
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUpward />
        </Button>
      )}
    </>
  )
}

export default ScrollToTopButton
