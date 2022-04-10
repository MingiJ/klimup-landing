import React from 'react'
import styled from 'styled-components'
import constants from '../../../styles/constants'
import { Title } from '../../../styles/globalStyles'
import Accordion from '../../components/Accordion'


const Container = styled.div`
  padding: 15rem 0;

  @media screen and (max-width: ${constants.LAPTOP}) {
    padding: 10rem 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  margin: 6rem 0;

  @media screen and (max-width: ${constants.LAPTOP}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${constants.MOBILE_L}) {
    grid-template-columns: 1fr;
  }
`


const FAQs = () => {
  return (
    <Container id='faqs'>
      <Title>FAQs</Title>

      <Grid>
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />        
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />
        <Accordion
          title='Why should I care about climate change?'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias animi quod labore minima nam rem? Cum porro ipsum velit minima eveniet quidem quos sequi repellat voluptate. Esse, recusandae? Quo.'
        />        
      </Grid>
    </Container>
  )
}

export default FAQs