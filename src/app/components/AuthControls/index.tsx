import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../Button'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`

const AuthControls = () => {
  return (
    <Container>
      <a href='https://klimup.vercel.app/signup' target='_blank'>
        <Button
          text='join the movement'
          color='primary-alt'
      />
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href='https://klimup.vercel.app/login' target='_blank'>
        <Button
          text='sign in'
          color='primary'
        />
      </a>
    </Container>
  )
}

export default AuthControls