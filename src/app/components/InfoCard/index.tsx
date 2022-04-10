import React from 'react'
import styled from 'styled-components'
import constants from '../../../styles/constants'

import { IInfoCard } from './types'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Icon = styled.div`
  font-size: 10rem;
  color: var(--primary-alt);
  width: max-content;
  display: flex;
  justify-content: flex-start;

  ${Container}:nth-of-type(2n) & {
    color: var(--primary);
  }

  @media screen and (max-width: ${constants.LAPTOP}) {
    font-size: 8rem;
  }
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-transform: capitalize;
  color: var(--text);
  margin: 2rem 0;

  @media screen and (max-width: ${constants.LAPTOP}) {
    font-size: 2.3rem;
  }
`

const Body = styled.p`
  font-size: 1.5rem;
  color: var(--text-alt);
  font-weight: 300;
  line-height: 160%;

  @media screen and (max-width: ${constants.LAPTOP}) {
    font-size: 1.4rem;
  }
`


const InfoCard: React.FC<IInfoCard> = ({ icon, title, body }) => {
  return (
    <Container>
      <Icon>
        {icon}
      </Icon>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  )
}

export default InfoCard