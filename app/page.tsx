import Slider from './components/Slide/Slider'
import AnnouncementPage from './announcement/page'
import AboutPage from './about/page'
import Work from './components/Work/Work'
import ContactWrapper from './components/Contact/ContactWrapper'


const Home: React.FC = () => {
  return (
    <>
      <Slider/>
      <AnnouncementPage/>
      <AboutPage/>
      <Work/>
      <ContactWrapper/>
    </>
    
  )
}

export default Home;
