import React from 'react'
import styled, { css } from 'styled-components'

import { IButton } from './types'


const Container = styled.button<{ scheme: string }>`
  padding: 1.2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  width: max-content;
  
  ${props => {
    if (props.scheme === 'primary') {
      return css`
        background: var(--primary);
        color: var(--text);
      `
    } else {
      return css`
        background: var(--primary-alt);
        color: var(--bg);
      `
    }
  }}
`


const Button: React.FC<IButton> = ({ text, color }) => {
  return (
    <Container scheme={color}>
      {text}
    </Container>
  )
}

export default Button