
import AboutPage from './about/page'
import AnnouncementPage from './announcement/page'
import ImageLinkSection from './components/ImageLinkSection'
import ContactPage from './contact/page'

const Home: React.FC = () => {
  return (
    <>
      <AnnouncementPage/>
      <AboutPage/>
      <ImageLinkSection/>
      <ContactPage/>
    </>
    
  )
}

export default Home;
