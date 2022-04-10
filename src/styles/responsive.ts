import { css } from 'styled-components'
import constants from './constants'

export const mobile_xs = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.MOBILE_XS}) {
      ${props}
    }
  `
}

export const mobile_s = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.MOBILE_S}) {
      ${props}
    }
  `
}

export const mobile_m = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.MOBILE_M}) {
      ${props}
    }
  `
}

export const mobile_l = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.MOBILE_L}) {
      ${props}
    }
  `
}

export const tablet = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.TABLET}) {
      ${props}
    }
  `
}

export const laptop = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.LAPTOP}) {
      ${props}
    }
  `
}

export const laptop_m = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.LAPTOP_M}) {
      ${props}
    }
  `
}

export const laptop_l = (props: any) => {
  return css`
    @media screen and (max-width: ${constants.LAPTOP_L}) {
      ${props}
    }
  `
}

