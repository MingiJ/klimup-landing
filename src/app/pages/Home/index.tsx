import React from 'react'
import styled from 'styled-components'

import AuthControls from '../../components/AuthControls'

import constants from '../../../styles/constants'


const Container = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 15rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  &:nth-child(2) {
    flex-direction: row-reverse;

    @media screen and (max-width: ${constants.MOBILE_L}) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: ${constants.LAPTOP}) {
    padding: 10rem 0;
  }

  @media screen and (max-width: ${constants.MOBILE_L}) {
    flex-direction: column;
  }
`

const CTAContainer = styled.div`
  width: 50%;

  @media screen and (max-width: ${constants.MOBILE_L}) {
    width: 100%;
    margin-bottom: 4rem;
  }
`

const MainText = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: ${constants.LAPTOP}) {
    font-size: 3.5rem;
  }
`

const Green = styled.span`
  color: var(--primary-alt);
`

const Blue = styled.span`
  color: var(--primary);
`

const Text = styled.p`
  font-size: 1.5rem;
  color: var(--text-alt);
  font-weight: 300;
  margin: 4rem 0 6rem 0;
  line-height: 150%;

  @media screen and (max-width: ${constants.LAPTOP}) {
    font-size: 1.4rem;
    margin: 3rem 0 5rem 0;
  }
`

const Image = styled.img`
  width: 35rem;

  @media screen and (max-width: ${constants.TABLET}) {
    width: 28rem;
  }
`


const Home = () => {
  return (
    <>
    <Container id='home'>
      <CTAContainer>
        <MainText>
          Start the <Green>fight</Green> against <Green>climate change.</Green>
        </MainText>

        <Text>
          Join Klimup and start connecting, teaching and learning with other people in the community .
        </Text>

        <AuthControls />
      </CTAContainer>

      <Image src='https://res.cloudinary.com/mingiklimup/image/upload/v1649566514/undraw_environment_iaus_zzgx7o.png' />
    </Container>
    
    <Container>
      <CTAContainer>
        <MainText>
           <Blue>Share</Blue> and  <Blue>Discover</Blue> ideas and solutions.
        </MainText>

        <Text>
          Join the fight against climate change, this planet belongs to all us. We have a duty to protect it!
        </Text>

        <AuthControls />
      </CTAContainer>

      <Image src='https://res.cloudinary.com/mingiklimup/image/upload/v1649566514/undraw_among_nature_p1xb_y3rvel.png' />
    </Container>
    </>
  )
}

export default Home