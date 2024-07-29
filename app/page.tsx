import Slider from './components/Slide/Slider'
import AboutPage from './about/page'
import Work from './components/Work/Work'
import ContactWrapper from './components/Contact/ContactWrapper'


const Home: React.FC = () => {
  return (
    <>
      <Slider/>
      <AboutPage/>
      <Work/>
      <ContactWrapper/>
    </>
    
  )
}

export default Home;
