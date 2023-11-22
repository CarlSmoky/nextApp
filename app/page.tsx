
// import Carousel from './components/Carousel'
import Slider from './components/Slide/Slider'
import AboutPage from './about/page'
import AnnouncementPage from './announcement/page'
import ImageLinkSection from './components/ImageLinkSection'
import ContactPage from './contact/page'

const Home: React.FC = () => {
  return (
    <>
      {/* <Carousel/> */}
      <Slider/>
      <AnnouncementPage/>
      <AboutPage/>
      <ImageLinkSection/>
      <ContactPage/>
    </>
    
  )
}

export default Home;
