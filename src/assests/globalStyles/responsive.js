import { css } from "styled-components"

export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 1900px) {
      ${props}
    }
  `
}

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `
}

export const mobileCart = (props) => {
  return css`
    @media only screen and (min-width: 480px) {
      ${props}
    }
  `
}