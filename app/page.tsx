import Image from 'next/image'
import AboutPage from './about/page'
import NiaInstructionPage from './nia-instruction/page'
import AnnouncementPage from './announcement/page'

const Home: React.FC = () => {
  return (
    <>
      <AnnouncementPage/>
      <AboutPage/>
      <NiaInstructionPage/>
    </>
    
  )
}

export default Home;
