import styled, { createGlobalStyle } from "styled-components";
import constants from "./constants";

export const GlobalStyle =  createGlobalStyle`
  @font-face {
    font-family: 'Elemental';
    src: url('https://res.cloudinary.com/dvaav1gff/raw/upload/v1644027087/elemental_end-webfont_y56hg9.woff2') format('woff2'),
         url('https://res.cloudinary.com/dvaav1gff/raw/upload/v1644027087/elemental_end-webfont_uwsjqp.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    /* FONTS */
    --font-main: 'Urbanist', 'Segoe UI', sans-serif;
    --font-alt: 'Flavors', sans-serif;
    --font-size: 10px;

    /* COLORS */
    --bg: #fff;
    --bg-alt: #161527; 
    --text: #05050d;
    --text-alt: #777;
    --primary: #ecdf9c;
    --primary-alt: #55aa6b;
  }

  /* GLOBAL RESET */
  
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: var(--font-size);
    font-family: var(--font-main);
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg);
    color: var(--text);

    &::-webkit-scrollbar {
      width: .5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
    }
    
  }

  a {
    text-decoration: none;
    color: #999;
  }

  ul {
    list-style: none;
  }

  input,
  button,
  textarea,
  select,
  option {
    font-family: inherit;
  }
`

export const Title = styled.h1`
  position: relative;
  font-size: 4rem;
  text-transform: capitalize;
  width: 20ch;
  line-height: 145%;

  &::after {
    content: '';
    display: block;
    margin-top: 4rem;
    width: 50%;
    height: 2px;
    background: rgba(255, 255, 255, .4);
  }

  @media screen and (max-width: ${constants.TABLET}) {
    font-size: 3.5rem;
  }
  
  @media screen and (max-width: ${constants.MOBILE_L}) {
    width: 100%;
  }
`