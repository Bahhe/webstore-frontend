import { css } from 'styled-components'

export const smallLaptop = (props) => {
  return css`
    @media only screen and (max-width: 1280px) {
      ${props}
    }
  `
}
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

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `
}

export const tabletMin = (props) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `
}

export const mobileCart = (props) => {
  return css`
    @media only screen and (min-width: 769px) {
      ${props}
    }
  `
}
