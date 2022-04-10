import React, { useState } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import styled from 'styled-components'

import { IAccordion } from './types'

const Container = styled.div`

`

const Header = styled.div`
  padding: 1rem 0;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text-alt);
  border-bottom: solid 1px var(--bg-alt);
  line-height: 150%;
  display: flex;
  align-items: flex-start;
  
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-alt);
  font-size: 2rem;
  margin-left: 2rem;
`

const Content = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text);
  line-height: 150%;
  padding: 1.5rem 0;
`


const Accordion: React.FC<IAccordion> = ({ title, body }) => {
  const [show, setShow] = useState<boolean>(false)

  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <Container>
      <Header onClick={handleToggle}>
        {title}
        <Icon>
          {show ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
        </Icon>
      </Header>

      {show && <Content>{body}</Content>}
    </Container>
  )
}

export default Accordion