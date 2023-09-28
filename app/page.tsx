
import AboutPage from './about/page'
import NiaInstructionPage from './nia-instruction/page'
import AnnouncementPage from './announcement/page'
import ImageLinkSection from './components/ImageLinkSection'

const Home: React.FC = () => {
  return (
    <>
      <AnnouncementPage/>
      <AboutPage/>
      <ImageLinkSection/>
      <NiaInstructionPage/>
    </>
    
  )
}

export default Home;
