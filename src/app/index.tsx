import styled from "styled-components"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import FAQs from "./pages/FAQs"
import Home from "./pages/Home"
import Services from "./pages/Services"

import StyleConstants from '../styles/constants'


const Container = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  padding-top: 8rem;

  @media screen and (max-width: ${StyleConstants.LAPTOP}) {
    width: 100%;
    padding: 2rem;
  }
`

const App = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Home />
        <Services />
        <FAQs />
      </Container>

      <Footer />
    </>
  )
}

export default App
