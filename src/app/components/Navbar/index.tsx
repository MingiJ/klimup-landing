import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Brand from '../Brand'
import AuthControls from '../AuthControls'
import { mobile_l } from '../../../styles/responsive'

import constants from '../../../styles/constants'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  z-index: 100;
  background: var(--bg);

  ${mobile_l({
    height: '6rem'
  })}
`

const Content = styled.div`
  height: 100%;
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${constants.LAPTOP}) {
    width: 100%;
    padding: 0 2rem;
  }
`

const LinkWrapper = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  background: var(--bg);

  @media screen and (max-width: ${constants.TABLET}) {
    flex-direction: column;
    position: fixed;
    top: 6rem;
    left: 0;
    align-items: flex-start;
    width: 100%;
    height: calc(100vh - 6rem);
    padding: 1rem 2rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: .3s ease;
  }
`

const StyledLink = styled.a`
  font-size: 1.3rem;
  color: var(--text);
  text-transform: capitalize;
  margin-right: 4rem;
  display: inline-block;

  @media screen and (max-width: ${constants.TABLET}) {
    padding: 2rem;
    margin-right: 0;
  }
`

const Box = styled.div`
  @media screen and (max-width: ${constants.TABLET}) {
    margin-top: 4rem;
    padding: 0 2rem;
  }
`

const Menu = styled.div`
  text-transform: uppercase;
  color: var(--text);
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${constants.TABLET}) {
    display: block;
  }
`

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleMenuClick = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <Content>
        <Brand />

        <LinkWrapper open={open}>
          <StyledLink href='#home' onClick={handleMenuClick}>home</StyledLink>
          <StyledLink href='#services' onClick={handleMenuClick}>why klimup</StyledLink>
          <StyledLink href='#faqs' onClick={handleMenuClick}>FAQs</StyledLink>

          <Box>
            <AuthControls />
          </Box>
        </LinkWrapper>

        <Menu onClick={handleMenuClick}>menu</Menu>
      </Content>
    </Container>
  )
}

export default Navbar