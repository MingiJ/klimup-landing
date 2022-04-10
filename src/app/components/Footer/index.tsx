import React from 'react'
import styled from 'styled-components'
import constants from '../../../styles/constants'
import Brand from '../Brand'


const Container = styled.div`
  position: relative;
  width: 100%;
  background: var(--bg-alt);

  @media screen and (max-width: ${constants.LAPTOP}) {
    padding: 0 2rem;
  }
`

const Content = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 6rem 0;
  /* display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  gap: 4rem; */
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: ${constants.LAPTOP}) {
    width: 100%;
  }
  
  @media screen and (max-width: ${constants.TABLET}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Text = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 300;
  color: var(--text-alt);
  letter-spacing: 2px;
  margin-top: 1.5rem;
`

const Copyright = styled.div`
  color: var(--text-alt);
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: ${constants.TABLET}) {
    margin-top: 4rem;
  }
`


const Footer = () => {
  return (
    <Container>
      <Content>
        <div>
          <Brand />
          <Text>powered by afordia zero</Text>
        </div>

        <Copyright>
          all rights reserved. copyright 2022 &copy;
        </Copyright>
      </Content>
    </Container>
  )
}

export default Footer