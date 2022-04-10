import React from 'react'
import styled from 'styled-components'
import { mobile_l } from '../../../styles/responsive'

const Container = styled.div`
  font-family: var(--font-alt);
  font-size: 2rem;
  text-transform: uppercase;

  ${mobile_l({
    fontSize: '1.8rem'
  })}
`

const Brand = () => {
  return (
    <Container>klimup</Container>
  )
}

export default Brand