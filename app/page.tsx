import dynamic from 'next/dynamic'
import AboutPage from './about/page'
import Work from './components/Work/Work'
import ContactPage from './contact/page'
import Slider from './components/Slide/Slider'

const Home: React.FC = () => {
  return (
    <>
      <Slider/>
      <AboutPage/>
      <Work/>
      <ContactPage/>
    </>
    
  )
}

export default Home;
