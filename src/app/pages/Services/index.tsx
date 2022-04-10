import React from 'react'
import styled from 'styled-components'
import { RiClipboardFill, RiMailUnreadFill, RiUser6Fill } from 'react-icons/ri'
import { BiSupport } from 'react-icons/bi'
import { BsBarChartLineFill } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import {
  RiDashboard3Line,
  RiCalendarEventLine,
  RiSettings3Fill,
  RiUser6Line
} from 'react-icons/ri'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { ImBooks } from 'react-icons/im'
import InfoCard from '../../components/InfoCard'

import { Title } from '../../../styles/globalStyles'
import constants from '../../../styles/constants'



const Container = styled.section`
  padding: 15rem 0;

  @media screen and (max-width: ${constants.LAPTOP}) {
    padding: 10rem 0;
  }
`

const AltFont = styled.span`
  font-family: var(--font-alt);
  text-transform: uppercase;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  margin: 8rem 0;

  @media screen and (max-width: ${constants.LAPTOP}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${constants.MOBILE_L}) {
    grid-template-columns: 1fr;
  }
`


const Services = () => {
  return (
    <Container id='services'>
      <Title>why use <AltFont>klimup?</AltFont></Title>

      <Grid>
        <InfoCard
          icon={<RiDashboard3Line />}
          title='dashboard'
          body="Track your day to day statics and see how many points you've earned in your
          fight against climate change"
        />

        <InfoCard
          icon={<RiCalendarEventLine />}
          title='events'
          body='Create and organise events'
        />

        <InfoCard
          icon={<HiOutlineLightBulb/>}
          title='ideas'
          body='Share and discover ideas in fighting climate change'
        />

        <InfoCard
          icon={<ImBooks />}
          title='learn'
          body='Stay up to date with everything climate change'
        />

        <InfoCard
          icon={<RiUser6Fill />}
          title='Connect & Collaborate'
          body='Connect and network with other people who are passionate about saving our planet'
        />
      </Grid>
    </Container>    
  )
}

export default Services